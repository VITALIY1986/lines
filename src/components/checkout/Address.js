import PropTypes from 'prop-types';
import CountrySelection from "./CountrySelection";
import Delivery from "./CountrySelection-copy";
import StateSelection from "./StatesSelection";
import InputField from "./form-elements/InputField";

const Address = ({input,countries,  states, handleOnChange, isFetchingStates, isShipping}) => {
    let countrieses = [{countryCode:"Кур'єрська доставка",countryName:"Кур'єрська доставка"},{countryCode:"Нова пошта від.№1",countryName:"Нова пошта від.№1"},{countryCode:" від.№2",countryName:" від.№2"},{countryCode:" від.№3",countryName:" від.№3"}];  
    const {errors} = input || {};

    return (
        <>
            <div className="flex flex-wrap overflow-hidden sm:-mx-3">
                <InputField
                    name="firstName"
                    inputValue={input?.firstName}
                    required
                    handleOnChange={handleOnChange}
                    label="Ім'я"
                    errors={errors}
                    isShipping={isShipping}
                    containerClassNames="w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"
                />
                <InputField
                    name="lastName"
                    inputValue={input?.lastName}
                    required
                    handleOnChange={handleOnChange}
                    label="Прізвище"
                    errors={errors}
                    isShipping={isShipping}
                    containerClassNames="w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"
                />
            </div>
         {/*  <InputField
                name="company"
                inputValue={input?.company}
                handleOnChange={handleOnChange}
                label="Company Name (Optional)"
                errors={errors}
                isShipping={isShipping}
                containerClassNames="mb-4"
         />*/}
            {/* Country Selection*/}
            <InputField
                name="city"
                required
                inputValue={input?.city}
                handleOnChange={handleOnChange}
                label="Місто"
                errors={errors}
                isShipping={isShipping}
                containerClassNames="mb-4"
            />
            <InputField
                name="address1"
                inputValue={input?.address1}
                required
                handleOnChange={handleOnChange}
                label="Адреса вулиці"
                placeholder="Номер будинку та назва вулиці"
                errors={errors}
                isShipping={isShipping}
                containerClassNames="mb-4"
            />
           {/*} <InputField
                name="address2"
                inputValue={input?.address2}
                handleOnChange={handleOnChange}
                label="Street address line two"
                placeholder="Apartment floor unit building floor etc(optional)"
                errors={errors}
                isShipping={isShipping}
                containerClassNames="mb-4"
    />*/}
           
             <CountrySelection
                input={input}
                handleOnChange={handleOnChange}
                countries={countries}
                isShipping={isShipping}
            />
            <Delivery
                input={input}
                handleOnChange={handleOnChange}
                countries={countrieses}
                isShipping={isShipping}
            />
            {/* State */}
            <StateSelection
                input={input}
                handleOnChange={handleOnChange}
                states={states}
                isShipping={isShipping}
                isFetchingStates={isFetchingStates}
            />
          
              {/*  <InputField
                    name="postcode"
                    inputValue={input?.postcode}
                    required
                    handleOnChange={handleOnChange}
                    label="Post code"
                    errors={errors}
                    isShipping={isShipping}
                    containerClassNames="w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"
              />*/}
                <InputField
                    name="phone"
                    inputValue={input?.phone}
                    required
                    handleOnChange={handleOnChange}
                    label="Phone"
                    errors={errors}
                    isShipping={isShipping}
                    containerClassNames="mb-4"
                />
        
         {/*   <InputField
                name="email"
                type="email"
                inputValue={input?.email}
                required
                handleOnChange={handleOnChange}
                label="Email"
                errors={errors}
                isShipping={isShipping}
                containerClassNames="mb-4"
            />*/}
            {/*	@TODO Create an Account
            <div className="form-check">
            <label className="leading-7 text-sm text-gray-600" className="form-check-label">
            	<input onChange={ handleOnChange } className="form-check-input" name="createAccount" type="checkbox"/>
            		Create an account?
            </div>
            {/*<h2 className="mt-4 mb-4">Additional Information</h2>*/}
            {/* @TODO Order Notes */}
            {/*<div className="form-group mb-3">*/}
            {/*	<label className="leading-7 text-sm text-gray-600" htmlFor="order-notes">Order Notes</label>*/}
            {/*	<textarea onChange={ handleOnChange } defaultValue={ input.orderNotes } name="orderNotes" className="form-control woo-next-checkout-textarea" id="order-notes" rows="4"/>*/}
            {/*	<Error errors={ input.errors } fieldName={ 'orderNotes' }/>*/}
            {/*</div>*/}
        </>
    );
};

Address.propTypes = {
    input: PropTypes.object,
    countries: PropTypes.array,
    handleOnChange: PropTypes.func,
    isFetchingStates: PropTypes.bool,
    isShipping: PropTypes.bool
}

Address.defaultProps = {
    input: {},
    countries: [],
    handleOnChange: () => null,
    isFetchingStates: false,
    isShipping: false
}

export default Address;
