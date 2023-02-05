import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select, Spinner, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

function BookingForm(props) {
	const [isLoading, setIsLoading] = useState(false) //response,
	const navigate = useNavigate('/')

	const reserveTable = (values)=>{
		setIsLoading(true)
		console.log(values, isLoading)

		setTimeout(function() {
			//your code to be executed after 1 second
			let result = props.submitForm(values)
			if( result ){
				setIsLoading(false)
				navigate('/booking/confirmed')
			}
			setIsLoading(false)
		}, 2000 )
	}

	const formik = useFormik({
		initialValues: {
			date: '',
			time: '',
			guests: '',
			occasion: ''
		},
		onSubmit: (values) => {
			reserveTable(values)
		},
		validationSchema: Yup.object({
			date: Yup.date().required('Required'),
			time: Yup.string().required('Required'),
			guests: Yup.number().required('Required').positive().integer(),
			occasion: Yup.string().required('Required'),
		}),
	})

	return (
		<Flex marginX="auto" w="1000px">
			<VStack w="1024px" px={32} paddingBottom={32} alignItems="flex-start">
				<Heading as="h1" id="contactme-section" paddingTop={20}>
				Reserve a table
				</Heading>
				<Box p={6} rounded="md" w="100%">
					<form data-testid="formik" onSubmit={formik.handleSubmit}>
						<VStack spacing={4}>
						<FormControl isInvalid={formik.touched.date && formik.errors.date}>
							<FormLabel fontWeight="bold" htmlFor="date">Date</FormLabel>
							<Input
							id="date"
							name="date"
							type="date"
							onBlur={formik.handleBlur}
							value={formik.values.date}
							onChange={(e) => {
								// dispatch to reducer
								props.availableTimes.dispatch({date: formik.values.date})

								// send input data to formik
								formik.handleChange(e);
							 }}
							/>
							<FormErrorMessage>{formik.errors.date}</FormErrorMessage>
						</FormControl>
						<FormControl isInvalid={formik.touched.time && formik.errors.time}>
							<FormLabel fontWeight="bold" htmlFor="time">Time</FormLabel>
							<Select
								id="time"
								name="time"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.time}
								>
								<option style={{color:"purple"}} value="">Select Time</option>
								{
									props.availableTimes.state.map(time=>{
										return (
											<option key={time} value={time}>{time}</option>
										)
									})
								}
							</Select>
							<FormErrorMessage>{formik.errors.time}</FormErrorMessage>
						</FormControl>
						<FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
							<FormLabel fontWeight="bold" htmlFor="guests">Guests</FormLabel>
							<Input
							id="guests"
							name="guests"
							type="number"
							{...formik.getFieldProps('guests')}
							/>
							<FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
						</FormControl>
						<FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
							<FormLabel fontWeight="bold" htmlFor="occasion">Occasion</FormLabel>
							<Select
							id="occasion"
							name="occasion"
							{...formik.getFieldProps('occasion')}
							>
								<option style={{color:"purple"}} value="">Select Occasion</option>
								<option value="birthday">Birthday</option>
								<option value="anniversary">Anniversary</option>
							</Select>
							<FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
						</FormControl>
						<Button type="submit" colorScheme="yellow" width="full" isLoading={isLoading} isDisabled={Object.keys(formik.errors).length}>
                			{isLoading ? <Spinner/> : 'Submit' }
						</Button>
						</VStack>
					</form>
				</Box>
			</VStack>
		</Flex>
	)
}

export default BookingForm;
