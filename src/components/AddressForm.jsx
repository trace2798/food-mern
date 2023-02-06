import { useForm } from 'react-hook-form'
import Button from './elements/Button'
import { ReactComponent as ArrowRightSvg } from "../assets/icons/arrow-right-long-svgrepo-com.svg";
import { useDispatch } from 'react-redux';
//importing the reducer from slice
import { setAddress } from '../stores/userInfo/addressSlice';

const AddressForm = ({ onTabSwitch}) => {
    const { register, handleSubmit, formState: { errors} } = useForm()
    const dispatch = useDispatch()

    const onSubmit = (data) => {
      dispatch(setAddress(data))
      onTabSwitch('Payment');
    }
    
  return (
    <form className="md:w-2/3 md:mx-auto px-3 pt-1" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="pt-4 text-2xl md:text-center">Address for delivery</h3>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" for="streetAddress">StreetAddress</label>
        <input
          {...register('address')}
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
          id="street address"
          type="text"
          placeholder="Street Address"
        />
        {errors.address && <span className="text-red-500">This field is required</span>}
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label className="block mb-2 text-sm font-bold text-gray-700" for="city">City</label>
            <input
          {...register('city')}
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
          id="city"
          type="text"
          placeholder="City"
          />
        </div>
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label className="block mb-2 text-sm font-bold text-gray-700" for="street">State</label>
            <input
          {...register('state')}
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
          id="city"
          type="text"
          placeholder="State"
          />
        </div>
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label className="block mb-2 text-sm font-bold text-gray-700" for="country">Country</label>
            <input
          {...register('country')}
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
          id="country"
          type="text"
          placeholder="Country"
          />
        </div>
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label className="block mb-2 text-sm font-bold text-gray-700" for="pincode">Pincode</label>
            <input
          {...register('pincode')}
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
          id="city"
          type="number"
          placeholder="Pincode"
          />
        </div>
      </div>
      <div className="flex justify-end p-2">
        <Button  variant="dark" className="flex items-center" type="submit">
          <span className="mr-1">Next</span> <ArrowRightSvg/>
        </Button>
      </div>
    </form>
  )
}

export default AddressForm