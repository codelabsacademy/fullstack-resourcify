const { default: mongoose } = require("mongoose");
const Resource = require("../models/Resource");

//Helper: Search for resource by it's id and return it back
const getAndCheckOwnership = async (id, user_id) => {
  try {
    const resource = await Resource.findById(id);
    if (!resource) {
      return res.status(404).json({ message: "Resource not found!" });
    }
    // Check whether this resource belongs to the signed in user
    if (!resource.postedBy.equals(user_id)) {
      throw new Error("You're not authorized to do this!");
    }
    return resource;
  } catch (error) {
    throw new Error("Error finding the resource!");
  }
};

// Create a resource
const createResource = async (req, res) => {
  const { title, description, tags } = req.body;

  //add to a database
  try {
    const resource = await Resource.create({
      title,
      description,
      tags,
      postedBy: req.user._id,
    });
    res.status(201).json(resource);
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};

// Read all resources
const getResources = async (req, res) => {
  try {
    const resources = await Resource.find({}).sort({ createdAt: -1 });
    res.status(200).json(resources);
  } catch (error) {
    res.status(400).json(error);
  }
};

//Read on resource by it's ID
const getResource = async (req, res) => {
  const { id } = req.params;

  try {
    const resource = await Resource.findById(id);

    if (!resource) {
      return res.status(404).json({ error: "Resource not found!" });
    }

    res.status(200).json(resource);
  } catch (error) {
    res.status(400).json({ message: "Error finding resource!" });
  }
};

const updateResource = async (req, res) => {
  const { id } = req.params;

  try {
    const resource = await getAndCheckOwnership(id, req.user._id);

    // Copy the values of the body received the resource object. Returns the target object.
    const updatedResource = Object.assign(resource, req.body);
    Resource.updateOne()

    await updatedResource.save();

    res.status(200).json({
      ok: true,
      message: "Resource updated successfully!",
      data: updatedResource,
    });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const deleteResource = async (req, res) => {
  const { id } = req.params;

  try {
    const resource = await getAndCheckOwnership(id, req.user._id);

    if (!resource) {
      return res.status(404).json({ error: "Resource not found!" });
    }

    await Resource.deleteOne({_id: id})

    res.status(200).json({message: "Resource deleted successfully!",data:resource});
  } catch (error) {
    res.status(400).json({message: "Error deleting resource"});
  }
};

module.exports = {
  createResource,
  getResources,
  getResource,
  updateResource,
  deleteResource,
};
