import React, { useState, useRef } from 'react';
import axios from 'axios';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProperty = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    property_type: 'residential',
    price: '',
    location: '',
    country: 'EG',
    governorate: 'Cairo',
    city: '',
    street: '',
    commercial: 'office',
    is_sale: 'sale',
    area: '',
    images: [],
    bed: '',
    bath: '',
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setFormData((prevData) => ({ ...prevData, images: [...prevData.images, ...files] }));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const removeImage = (index) => {
    const updatedImages = [...formData.images];
    const updatedPreviews = [...imagePreviews];
    updatedImages.splice(index, 1);
    updatedPreviews.splice(index, 1);
    setFormData((prevData) => ({ ...prevData, images: updatedImages }));
    setImagePreviews(updatedPreviews);
  };

  

 

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      for (const [key, value] of Object.entries(errors)) {
        if (value) {
          toast.error(value, {
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      }
      return;
    }

    const formDataToSend = new FormData();

    for (let key in formData) {
      if (key === 'images') {
        formData.images.forEach((image, index) => {
          formDataToSend.append(`images[${index}]`, image);
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/property/properties/', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Property added successfully', {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setFormData({
        title: '',
        description: '',
        property_type: 'residential',
        price: '',
        location: '',
        country: 'EG',
        governorate: 'Cairo',
        city: '',
        street: '',
        commercial: 'office',
        is_sale: 'sale',
        area: '',
        images: [],
        bed: '',
        bath: '',
      });
      setImagePreviews([]);
    } catch (error) {
      toast.error('Failed to add property', {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.error('There was an error adding the property:', error.response?.data || error);
    }
  };

  return (
    <div className="container mt-5 shadow-lg">
      <ToastContainer />
      <h2>Add New Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              ref={inputRefs.title}
              value={formData.title}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.title && <small className="text-danger">{errors.title}</small>}
          </div>

          <div className="col-md-6">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              ref={inputRefs.description}
              value={formData.description}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            ></textarea>
            {errors.description && <small className="text-danger">{errors.description}</small>}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Property Type</label>
            <select
              className="form-select"
              name="property_type"
              value={formData.property_type}
              onChange={handleChange}
              required
            >
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              ref={inputRefs.price}
              value={formData.price}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.price && <small className="text-danger">{errors.price}</small>}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              name="location"
              ref={inputRefs.location}
              value={formData.location}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.location && <small className="text-danger">{errors.location}</small>}
          </div>

          <div className="col-md-6">
            <label className="form-label">Country</label>
            <select
              className="form-select"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="EG">Egypt</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Governorate</label>
            <input
              type="text"
              className="form-control"
              name="governorate"
              ref={inputRefs.governorate}
              value={formData.governorate}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.governorate && <small className="text-danger">{errors.governorate}</small>}
          </div>

          <div className="col-md-6">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              ref={inputRefs.city}
              value={formData.city}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.city && <small className="text-danger">{errors.city}</small>}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Street</label>
            <input
              type="text"
              className="form-control"
              name="street"
              ref={inputRefs.street}
              value={formData.street}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.street && <small className="text-danger">{errors.street}</small>}
          </div>

          <div className="col-md-6">
            <label className="form-label">Commercial Type</label>
            <select
              className="form-select"
              name="commercial"
              ref={inputRefs.commercial}
              value={formData.commercial}
              onChange={handleChange}
              required
            >
              <option value="office">Office</option>
              <option value="retail">Retail</option>
            </select>
            {errors.commercial && <small className="text-danger">{errors.commercial}</small>}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Area (sqm)</label>
            <input
              type="number"
              className="form-control"
              name="area"
              ref={inputRefs.area}
              value={formData.area}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.area && <small className="text-danger">{errors.area}</small>}
          </div>

          <div className="col-md-6">
            <label className="form-label">Number of Bedrooms</label>
            <input
              type="number"
              className="form-control"
              name="bed"
              value={formData.bed}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Number of Bathrooms</label>
            <input
              type="number"
              className="form-control"
              name="bath"
              ref={inputRefs.bath}
              value={formData.bath}
              onChange={handleChange}
              onBlur={handleBlur}
              required={formData.property_type === 'residential'}
            />
            {errors.bath && <small className="text-danger">{errors.bath}</small>}
          </div>

          <div className="col-md-6">
            <label className="form-label">Sale or Rent</label>
            <select
              className="form-select"
              name="is_sale"
              ref={inputRefs.is_sale}
              value={formData.is_sale}
              onChange={handleChange}
              required
            >
              <option value="sale">Sale</option>
              <option value="rent">Rent</option>
            </select>
            {errors.is_sale && <small className="text-danger">{errors.is_sale}</small>}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Images</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
          <div className="image-previews mt-2">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="position-relative">
                <img src={preview} alt={`preview-${index}`} className="img-thumbnail me-2" style={{ width: '100px', height: '100px' }} />
                <button
                  type="button"
                  className="btn-close position-absolute top-0 end-0"
                  onClick={() => removeImage(index)}
                ></button>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProperty = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    property_type: 'residential',
    price: '',
    location: '',
    country: 'EG',
    governorate: 'Cairo',
    city: '',
    street: '',
    commercial: 'office',
    is_sale: 'sale',
    area: '',
    images: [],
    bed: '',
    bath: '',
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  const [errors, setErrors] = useState({});
  const inputRefs = {
    title: useRef(),
    description: useRef(),
    price: useRef(),
    location: useRef(),
    city: useRef(),
    bath: useRef(),
    area: useRef(),
    governorate: useRef(),
    street: useRef(),
    commercial: useRef(),
    is_sale: useRef(),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setFormData((prevData) => ({ ...prevData, images: [...prevData.images, ...files] }));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const removeImage = (index) => {
    const updatedImages = [...formData.images];
    const updatedPreviews = [...imagePreviews];
    updatedImages.splice(index, 1);
    updatedPreviews.splice(index, 1);
    setFormData((prevData) => ({ ...prevData, images: updatedImages }));
    setImagePreviews(updatedPreviews);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required.';
    if (!formData.description) newErrors.description = 'Description is required.';
    if (!formData.price) newErrors.price = 'Price is required.';
    if (!formData.location) newErrors.location = 'Location is required.';
    if (!formData.city) newErrors.city = 'City is required.';
    if (formData.property_type === 'residential' && !formData.bath) 
      newErrors.bath = 'Number of bathrooms is required for residential properties.';
    if (!formData.area) newErrors.area = 'Area is required.';
    if (!formData.governorate) newErrors.governorate = 'Governorate is required.';
    if (!formData.street) newErrors.street = 'Street is required.';
    if (!formData.commercial) newErrors.commercial = 'Commercial type is required.';
    if (!formData.is_sale) newErrors.is_sale = 'Sale or Rent option is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const focusNextField = (currentField) => {
    const fields = Object.keys(inputRefs);
    const currentIndex = fields.indexOf(currentField);
    if (currentIndex < fields.length - 1) {
      const nextField = fields[currentIndex + 1];
      inputRefs[nextField].current.focus();
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    if (!formData[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: 'This field is required.' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
      focusNextField(name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      for (const [key, value] of Object.entries(errors)) {
        if (value) {
          toast.error(value, {
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      }
      return;
    }

    const formDataToSend = new FormData();

    for (let key in formData) {
      if (key === 'images') {
        formData.images.forEach((image, index) => {
          formDataToSend.append(`images[${index}]`, image);
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/property/properties/', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Property added successfully', {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setFormData({
        title: '',
        description: '',
        property_type: 'residential',
        price: '',
        location: '',
        country: 'EG',
        governorate: 'Cairo',
        city: '',
        street: '',
        commercial: 'office',
        is_sale: 'sale',
        area: '',
        images: [],
        bed: '',
        bath: '',
      });
      setImagePreviews([]);
    } catch (error) {
      toast.error('Failed to add property', {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.error('There was an error adding the property:', error.response?.data || error);
    }
  };

  return (
    <div className="container mt-5 shadow-lg">
      <ToastContainer />
      <h2>Add New Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              ref={inputRefs.title}
              value={formData.title}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.title && <small className="text-danger">{errors.title}</small>}
          </div>

          <div className="col-md-6">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              ref={inputRefs.description}
              value={formData.description}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            ></textarea>
            {errors.description && <small className="text-danger">{errors.description}</small>}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Property Type</label>
            <select
              className="form-select"
              name="property_type"
              value={formData.property_type}
              onChange={handleChange}
              required
            >
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              ref={inputRefs.price}
              value={formData.price}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.price && <small className="text-danger">{errors.price}</small>}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              name="location"
              ref={inputRefs.location}
              value={formData.location}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.location && <small className="text-danger">{errors.location}</small>}
          </div>

          <div className="col-md-6">
            <label className="form-label">Country</label>
            <select
              className="form-select"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="EG">Egypt</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Governorate</label>
            <input
              type="text"
              className="form-control"
              name="governorate"
              ref={inputRefs.governorate}
              value={formData.governorate}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.governorate && <small className="text-danger">{errors.governorate}</small>}
          </div>

          <div className="col-md-6">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              ref={inputRefs.city}
              value={formData.city}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.city && <small className="text-danger">{errors.city}</small>}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Street</label>
            <input
              type="text"
              className="form-control"
              name="street"
              ref={inputRefs.street}
              value={formData.street}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.street && <small className="text-danger">{errors.street}</small>}
          </div>

          <div className="col-md-6">
            <label className="form-label">Commercial Type</label>
            <select
              className="form-select"
              name="commercial"
              ref={inputRefs.commercial}
              value={formData.commercial}
              onChange={handleChange}
              required
            >
              <option value="office">Office</option>
              <option value="retail">Retail</option>
            </select>
            {errors.commercial && <small className="text-danger">{errors.commercial}</small>}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Area (sqm)</label>
            <input
              type="number"
              className="form-control"
              name="area"
              ref={inputRefs.area}
              value={formData.area}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.area && <small className="text-danger">{errors.area}</small>}
          </div>

          <div className="col-md-6">
            <label className="form-label">Number of Bedrooms</label>
            <input
              type="number"
              className="form-control"
              name="bed"
              value={formData.bed}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Number of Bathrooms</label>
            <input
              type="number"
              className="form-control"
              name="bath"
              ref={inputRefs.bath}
              value={formData.bath}
              onChange={handleChange}
              onBlur={handleBlur}
              required={formData.property_type === 'residential'}
            />
            {errors.bath && <small className="text-danger">{errors.bath}</small>}
          </div>

          <div className="col-md-6">
            <label className="form-label">Sale or Rent</label>
            <select
              className="form-select"
              name="is_sale"
              ref={inputRefs.is_sale}
              value={formData.is_sale}
              onChange={handleChange}
              required
            >
              <option value="sale">Sale</option>
              <option value="rent">Rent</option>
            </select>
            {errors.is_sale && <small className="text-danger">{errors.is_sale}</small>}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Images</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
          <div className="image-previews mt-2">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="position-relative">
                <img src={preview} alt={`preview-${index}`} className="img-thumbnail me-2" style={{ width: '100px', height: '100px' }} />
                <button
                  type="button"
                  className="btn-close position-absolute top-0 end-0"
                  onClick={() => removeImage(index)}
                ></button>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
