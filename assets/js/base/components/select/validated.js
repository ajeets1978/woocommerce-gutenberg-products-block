/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect } from 'react';
import { useValidationContext } from '@woocommerce/base-context';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withInstanceId } from '@woocommerce/base-hocs/with-instance-id';

/**
 * Internal dependencies
 */
import { ValidationInputError } from '../validation';
import Select from './index';
import './style.scss';

const ValidatedSelect = ( {
	className,
	id,
	value,
	instanceId,
	required,
	errorId,
	errorMessage = __(
		'Please select a value.',
		'woo-gutenberg-products-block'
	),
	...rest
} ) => {
	const selectId = id || 'select-' + instanceId;
	errorId = errorId || selectId;
	const {
		getValidationError,
		setValidationErrors,
		clearValidationError,
	} = useValidationContext();
	const validateSelect = () => {
		if ( ! required || value ) {
			clearValidationError( errorId );
		} else {
			setValidationErrors( {
				[ errorId ]: {
					message: errorMessage,
					hidden: true,
				},
			} );
		}
	};

	useEffect( () => {
		validateSelect();
	}, [ value ] );

	const error = getValidationError( errorId ) || {};

	return (
		<Select
			id={ selectId }
			className={ classnames( className, {
				'has-error': error.message && ! error.hidden,
			} ) }
			feedback={ <ValidationInputError propertyName={ errorId } /> }
			value={ value }
			{ ...rest }
		/>
	);
};

ValidatedSelect.propTypes = {
	className: PropTypes.string,
	errorId: PropTypes.string,
	errorMessage: PropTypes.string,
	id: PropTypes.string,
	required: PropTypes.bool,
	value: PropTypes.shape( {
		key: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	} ),
};

export default withInstanceId( ValidatedSelect );