import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select, Spinner, VStack } from "@chakra-ui/react";
import React, {useEffect} from "react";
import { useFormik } from "formik";
import useSubmit from "../hooks/useSubmit";
import * as Yup from 'yup';
import BookingSlot from "./BookingSlot";

function BookingForm(props) {
	const {isLoading, response, submit} = useSubmit();

	const formik = useFormik({
		initialValues: {
			date: '',
			time: '',
			guests: '',
			occasion: ''
		},
		onSubmit: (values) => {
			// console.log(values, isLoading)
			submit('/',values)
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, 'Must be 15 characters or less')
				.required('Required'),
			email: Yup.string()
				.email('Invalid email address')
				.required('Required'),
			comment: Yup.string()
				.min(25, 'Must be at least 25 characters')
				.required('Required'),
		}),
	});

	useEffect(() => {
		console.log( formik.values.time)
	} )

	return (
		<Flex marginX="auto" w="1000px">
			<VStack w="1024px" px={32} paddingBottom={32} alignItems="flex-start">
				<Heading as="h1" id="contactme-section" paddingTop={20}>
				Reserve a table
				</Heading>
				<Box p={6} rounded="md" w="100%">
					<form onSubmit={formik.handleSubmit}>
						<VStack spacing={4}>
						<FormControl isInvalid={formik.touched.date && formik.errors.date}>
							<FormLabel fontWeight="bold" htmlFor="date">Date</FormLabel>
							<Input
							id="date"
							name="date"
							type="date"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.firstName}
							/>
							<FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
						</FormControl>
						<FormControl >
							<FormLabel fontWeight="bold" htmlFor="time">Time</FormLabel>
							<Flex justifyContent={"center"}>
							{
								props.availableTimes.state.map( time=>{
									return (
										<BookingSlot key={time.id} time={time} dispatch={props.availableTimes.dispatch} />
									)
								})
							}
							</Flex>
							<Select
								id="time"
								name="time"
								// onChange={e=>props.availableTimes.dispatch(e.target.value)}
								// onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.time}
								onChange={(e) => {
									// dispatch to reducer
									props.availableTimes.dispatch({time: e.target.value})

									// send input data to formik
									formik.handleChange(e);
								 }}
								>
								<option style={{color:"purple"}} value="">Select Time</option>
								{
									props.availableTimes.state.map(time=>{
										return (
											<option key={time.id} value={time.time}>{time.time}</option>
										)
									})
								}
								</Select>
							{/* <FormErrorMessage>{formik.errors.type}</FormErrorMessage> */}
						</FormControl>
						{/* <FormControl isInvalid={formik.touched.type && formik.errors.type}> */}
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
								<option value="birthday">Birthday</option>
								<option value="anniversary">Anniversary</option>
							</Select>
							<FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
						</FormControl>
						<Button type="submit" colorScheme="yellow" width="full" disabled={isLoading}>
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
