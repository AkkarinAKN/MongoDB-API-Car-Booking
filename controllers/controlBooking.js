import modelBooking from "../models/modelBooking.js";
import modelService from "../models/modelService.js";

export const createBooking = async (req, res, next) => {
  try {
    const serviceID = await modelService.findOne(req.body.id);
    const newBooking = new modelBooking({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      desc: req.body.desc,
      bookingdatetime: req.body.bookingdatetime,
      service: serviceID,
    });
    await newBooking.save();
    res.status(200).send("SUCCESS");
  } catch (err) {
    next(err);
  }
};

export const updateBooking = async (req, res, next) => {
  try {
    const updatedBooking = await modelBooking.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBooking);
  } catch (err) {
    next(err);
  }
};

export const deleteBooking = async (req,res,next)=>{
  try{
    await modelBooking.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  }catch(err){
    next(err)
  }
}

export const getBooking= async (req,res,next)=>{
  try {
    const booking = await modelBooking.findById(req.params.id);
    res.status(200).json(booking);
  } catch (err) {
    next(err);
  }
}
export const getBookings = async (req,res,next)=>{
  try {
    const getBookings = await modelBooking.find();
    res.status(200).json(getBookings);
  } catch (err) {
    next(err);
  }
}