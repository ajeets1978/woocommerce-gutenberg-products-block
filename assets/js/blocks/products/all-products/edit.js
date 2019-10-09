/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';
import {
	BlockControls,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/editor';
import { withDispatch, withSelect } from '@wordpress/data';
import {
	PanelBody,
	withSpokenMessages,
	Placeholder,
	Button,
	IconButton,
	Toolbar,
	Disabled,
	Tip,
} from '@wordpress/components';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import PropTypes from 'prop-types';
import Gridicon from 'gridicons';

/**
 * Internal dependencies
 */
import {
	renderHiddenContentPlaceholder,
	renderNoProductsPlaceholder,
	getBlockClassName,
} from '../utils';
import { getSharedListControls } from '../edit';
import GridLayoutControl from '@woocommerce/block-components/grid-layout-control';
import { HAS_PRODUCTS } from '@woocommerce/block-settings';
import Block from './block';
import {
	getProductLayoutConfig,
	DEFAULT_PRODUCT_LIST_TEMPLATE,
	BLOCK_MAP,
} from '../../../atomic/utils';

/**
 * Component to handle edit mode of "All Products".
 */
class Editor extends Component {
	static propTypes = {
		/**
		 * The attributes for this block.
		 */
		attributes: PropTypes.object.isRequired,
		/**
		 * A callback to update attributes.
		 */
		setAttributes: PropTypes.func.isRequired,
		/**
		 * From withSpokenMessages.
		 */
		debouncedSpeak: PropTypes.func.isRequired,
	};

	state = {
		isEditing: false,
		innerBlocks: [],
	};

	componentDidMount = () => {
		const { block } = this.props;
		this.setState( { innerBlocks: block.innerBlocks } );
	};

	getTitle = () => {
		return __( 'All Products', 'woo-gutenberg-products-block' );
	};

	getIcon = () => {
		return <Gridicon icon="grid" />;
	};

	togglePreview = () => {
		const { debouncedSpeak } = this.props;

		this.setState( { isEditing: ! this.state.isEditing } );

		if ( ! this.state.isEditing ) {
			debouncedSpeak(
				__(
					'Showing All Products block preview.',
					'woo-gutenberg-products-block'
				)
			);
		}
	};

	getInspectorControls = () => {
		const { attributes, setAttributes } = this.props;
		const { columns, rows, alignButtons } = attributes;

		return (
			<InspectorControls key="inspector">
				<PanelBody
					title={ __( 'Layout', 'woo-gutenberg-products-block' ) }
					initialOpen
				>
					<GridLayoutControl
						columns={ columns }
						rows={ rows }
						alignButtons={ alignButtons }
						setAttributes={ setAttributes }
					/>
				</PanelBody>
				<PanelBody
					title={ __(
						'List Settings',
						'woo-gutenberg-products-block'
					) }
					initialOpen
				>
					{ getSharedListControls( attributes, setAttributes ) }
				</PanelBody>
			</InspectorControls>
		);
	};

	getBlockControls = () => {
		const { isEditing } = this.state;

		return (
			<BlockControls>
				<Toolbar
					controls={ [
						{
							icon: 'edit',
							title: __( 'Edit', 'woo-gutenberg-products-block' ),
							onClick: () => this.togglePreview(),
							isActive: isEditing,
						},
					] }
				/>
			</BlockControls>
		);
	};

	renderEditMode = () => {
		const onDone = () => {
			const { block, setAttributes } = this.props;
			setAttributes( {
				layoutConfig: getProductLayoutConfig( block.innerBlocks ),
			} );
			this.setState( { innerBlocks: block.innerBlocks } );
			this.togglePreview();
		};

		const onCancel = () => {
			const { block, replaceInnerBlocks } = this.props;
			const { innerBlocks } = this.state;
			replaceInnerBlocks( block.clientId, innerBlocks, false );
			this.togglePreview();
		};

		const onReset = () => {
			const { block, replaceInnerBlocks } = this.props;
			const newBlocks = [];
			DEFAULT_PRODUCT_LIST_TEMPLATE.map( ( blockType ) => {
				newBlocks.push( createBlock( blockType[0], blockType[1] ) );
				return true;
			} );
			replaceInnerBlocks( block.clientId, newBlocks, false );
			this.setState( { innerBlocks: block.innerBlocks } );
		};

		return (
			<Placeholder icon={ this.getIcon() } label={ this.getTitle() }>
				{ __(
					'Display all products from your store as a grid.',
					'woo-gutenberg-products-block'
				) }
				<div className="wc-block-all-products-grid-item-template">
					<div className="wc-block-grid has-1-columns">
						<ul className="wc-block-grid__products">
							<li className="wc-block-grid__product">
								<InnerBlocks
									template={ DEFAULT_PRODUCT_LIST_TEMPLATE }
									templateLock={ false }
									allowedBlocks={ Object.keys( BLOCK_MAP ) }
									renderAppender={ false }
								/>
							</li>
						</ul>
					</div>
					<Tip>
						{ __(
							'Edit the blocks inside the preview above to change the content displayed for each product within the product grid.',
							'woo-gutenberg-products-block'
						) }
					</Tip>
					<div className="wc-block-all-products__actions">
						<Button
							className="wc-block-all-products__done-button"
							isPrimary
							isLarge
							onClick={ onDone }
						>
							{ __( 'Done', 'woo-gutenberg-products-block' ) }
						</Button>
						<Button
							className="wc-block-all-products__cancel-button"
							isTertiary
							onClick={ onCancel }
						>
							{ __( 'Cancel', 'woo-gutenberg-products-block' ) }
						</Button>
						<IconButton
							className="wc-block-all-products__reset-button"
							icon={ <Gridicon icon="grid" /> }
							label={ __( 'Reset layout to default', 'woo-gutenberg-products-block' ) }
							onClick={ onReset }
						>
							{ __( 'Reset Layout', 'woo-gutenberg-products-block' ) }
						</IconButton>
					</div>
				</div>
			</Placeholder>
		);
	};

	renderViewMode = () => {
		const { attributes } = this.props;

		return (
			<Disabled>
				<Block attributes={ attributes } />
			</Disabled>
		);
	};

	render = () => {
		const { attributes } = this.props;
		const { contentVisibility } = attributes;
		const { isEditing } = this.state;
		const blockTitle = this.getTitle();
		const blockIcon = this.getIcon();
		const hasContent =
			0 !== Object.values( contentVisibility ).filter( Boolean ).length;

		return (
			<div
				className={ getBlockClassName(
					'wc-block-all-products',
					attributes
				) }
			>
				{ this.getBlockControls() }
				{ this.getInspectorControls() }
				{ ! HAS_PRODUCTS &&
					renderNoProductsPlaceholder( blockTitle, blockIcon ) }
				{ ! hasContent &&
					renderHiddenContentPlaceholder( blockTitle, blockIcon ) }
				{ isEditing ? this.renderEditMode() : this.renderViewMode() }
			</div>
		);
	};
}

export default compose(
	withSpokenMessages,
	withSelect( ( select, { clientId } ) => {
		const { getBlock } = select( 'core/block-editor' );
		return {
			block: getBlock( clientId ),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const {
			replaceInnerBlocks,
		} = dispatch( 'core/block-editor' );
		return {
			replaceInnerBlocks,
		};
	} ),
)( Editor );
