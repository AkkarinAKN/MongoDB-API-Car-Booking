import modelRoute from "../models/modelRoute.js";

export const createRoute = async (req, res, next) => {
  const newRoute = modelRoute(req.body);
  try {
      const saveRoute = await newRoute.save();
      res.status(200).json(saveRoute)
  } catch (err) {
    next(err);
  }
};

export const updateRoute = async (req, res, next) => {
  try {
    const updateRoute = await modelRoute.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updateRoute);
  } catch (err) {
    next(err);
  }
};

export const deleteRoute = async (req, res, next) => {
  try {
    await modelRoute.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getRoute = async (req, res, next) => {
  try {
    const Routes = await modelRoute.find();
    res.status(200).json(Routes);
  } catch (err) {
    next(err);
  }
};
