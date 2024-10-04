// import { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS

// function SelectBasicExample() {
//   const [propertyType, setPropertyType] = useState('');
//   const [governorate, setGovernorate] = useState('');
//   const [propertyCategory, setPropertyCategory] = useState('');

//   const handlePropertyTypeChange = (event) => {
//     setPropertyType(event.target.value);
//   };

//   const handleGovernorateChange = (event) => {
//     setGovernorate(event.target.value);
//   };

//   const handlePropertyCategoryChange = (event) => {
//     setPropertyCategory(event.target.value);
//   };

//   const handleSearch = () => {
//     // Perform search logic here
//     console.log('Search clicked!');
//     console.log(`Governorate: ${governorate}, Property Type: ${propertyType}, Property Category: ${propertyCategory}`);
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100">
//       <div className="p-4 border rounded bg-light shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
//         {/* Governorate Selection */}
//         <Form.Select aria-label="Select Egyptian Governorate" onChange={handleGovernorateChange} className="mb-3">
//           <option>Select your Governorate</option>
//           <option value="Cairo">Cairo</option>
//           <option value="Alexandria">Alexandria</option>
//           <option value="Giza">Giza</option>
//           <option value="Qalyubia">Qalyubia</option>
//           <option value="Sharqia">Sharqia</option>
//           <option value="Dakahlia">Dakahlia</option>
//           <option value="Damietta">Damietta</option>
//           <option value="Port Said">Port Said</option>
//           <option value="Ismailia">Ismailia</option>
//           <option value="Suez">Suez</option>
//           <option value="Kafr El Sheikh">Kafr El Sheikh</option>
//           <option value="Gharbia">Gharbia</option>
//           <option value="Monufia">Monufia</option>
//           <option value="Beheira">Beheira</option>
//           <option value="Matrouh">Matrouh</option>
//           <option value="Faiyum">Faiyum</option>
//           <option value="Beni Suef">Beni Suef</option>
//           <option value="Minya">Minya</option>
//           <option value="Assiut">Assiut</option>
//           <option value="Sohag">Sohag</option>
//           <option value="Qena">Qena</option>
//           <option value="Luxor">Luxor</option>
//           <option value="Aswan">Aswan</option>
//           <option value="Red Sea">Red Sea</option>
//           <option value="New Valley">New Valley</option>
//           <option value="North Sinai">North Sinai</option>
//           <option value="South Sinai">South Sinai</option>
//         </Form.Select>

//         {/* Property Type Selection */}
//         <Form.Select aria-label="Select Property Type" className="mb-3" onChange={handlePropertyTypeChange}>
//           <option>Select property type</option>
//           <option value="commercial">commercial</option>
//           <option value="residential">residential</option>
//         </Form.Select>

//         {/* Conditional Dropdown for Commercial Property Types */}
//         {propertyType === 'commercial' && (
//           <Form.Select aria-label="Select Commercial Property Type" className="mb-3" onChange={handlePropertyCategoryChange}>
//             <option>Select commercial type</option>
//             <option value="pharmacy">Pharmacy</option>
//             <option value="office">Office</option>
//             <option value="restaurant">restaurant</option>
//             <option value="pharmacy">pharmacy</option>
//             <option value="clinic">clinic</option>
//             <option value="commercial building">commercial building</option>
//             <option value="commercial land">commercial land</option>
//             <option value="agricultural">agricultural</option>
//             <option value="other commercial">other commercial</option>
//             <option value="garage">garage</option>



//           </Form.Select>
//         )}

//         {/* Conditional Dropdown for Residential Property Types */}
//         {propertyType === 'residential' && (
//           <Form.Select aria-label="Select Residential Property Type" className="mb-3" onChange={handlePropertyCategoryChange}>
//             <option>Select residential type</option>
//             <option value="apartment">Apartment</option>
//             <option value="villa">Villa</option>
//             <option value="townhouse">Townhouse</option>
//             <option value="penthouse">Penthouse</option>
//             <option value="compound">Compound</option>
//             <option value="chalet">Chalet</option>
//           </Form.Select>
//         )}

//         {/* Search Button */}
//         <Button style={{ backgroundColor: '#31C48B', borderColor: '#31C48B' }} 
//           className="text-white py-2 px-4 rounded w-100 mt-3"  onClick={handleSearch}>
//           Search
//         </Button>
//       </div>
//     </div>
//   );
// }






import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS

function SelectBasicExample() {
  const [propertyType, setPropertyType] = useState('');
  const [governorate, setGovernorate] = useState('');
  const [propertyCategory, setPropertyCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [city, setCity] = useState('');  // New state for city search

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handleGovernorateChange = (event) => {
    setGovernorate(event.target.value);
  };

  const handlePropertyCategoryChange = (event) => {
    setPropertyCategory(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    // Perform search logic here
    console.log('Search clicked!');
    console.log(`Governorate: ${governorate}, Property Type: ${propertyType}, Property Category: ${propertyCategory}, Min Price: ${minPrice}, Max Price: ${maxPrice}, City: ${city}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="p-4 border rounded bg-light shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        {/* Governorate Selection */}
        <Form.Select aria-label="Select Egyptian Governorate" onChange={handleGovernorateChange} className="mb-3">
          <option>Select your Governorate</option>
          <option value="Cairo">Cairo</option>
          <option value="Alexandria">Alexandria</option>
          <option value="Giza">Giza</option>
          <option value="Qalyubia">Qalyubia</option>
          <option value="Sharqia">Sharqia</option>
          <option value="Dakahlia">Dakahlia</option>
          <option value="Damietta">Damietta</option>
          <option value="Port Said">Port Said</option>
          <option value="Ismailia">Ismailia</option>
          <option value="Suez">Suez</option>
          <option value="Kafr El Sheikh">Kafr El Sheikh</option>
          <option value="Gharbia">Gharbia</option>
          <option value="Monufia">Monufia</option>
          <option value="Beheira">Beheira</option>
          <option value="Matrouh">Matrouh</option>
          <option value="Faiyum">Faiyum</option>
          <option value="Beni Suef">Beni Suef</option>
          <option value="Minya">Minya</option>
          <option value="Assiut">Assiut</option>
          <option value="Sohag">Sohag</option>
          <option value="Qena">Qena</option>
          <option value="Luxor">Luxor</option>
          <option value="Aswan">Aswan</option>
          <option value="Red Sea">Red Sea</option>
          <option value="New Valley">New Valley</option>
          <option value="North Sinai">North Sinai</option>
          <option value="South Sinai">South Sinai</option>
       
          {/* Add other governorates */}
        </Form.Select>

        {/* Property Type Selection */}
        <Form.Select aria-label="Select Property Type" className="mb-3" onChange={handlePropertyTypeChange}>
          <option>Select property type</option>
          <option value="commercial">Commercial</option>
          <option value="residential">Residential</option>
        </Form.Select>

        {/* Conditional Dropdown for Commercial Property Types */}
        {propertyType === 'commercial' && (
          <Form.Select aria-label="Select Commercial Property Type" className="mb-3" onChange={handlePropertyCategoryChange}>
            <option>Select commercial type</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="office">Office</option>
            <option value="restaurant">restaurant</option>
            <option value="pharmacy">pharmacy</option>
            <option value="clinic">clinic</option>
            <option value="commercial building">commercial building</option>
            <option value="commercial land">commercial land</option>
            <option value="agricultural">agricultural</option>
            <option value="other commercial">other commercial</option>
            <option value="garage">garage</option>
            {/* Add other commercial types */}
          </Form.Select>
        )}

        {/* Conditional Dropdown for Residential Property Types */}
        {propertyType === 'residential' && (
          <Form.Select aria-label="Select Residential Property Type" className="mb-3" onChange={handlePropertyCategoryChange}>
            <option>Select residential type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="townhouse">Townhouse</option>
            <option value="penthouse">Penthouse</option>
            <option value="compound">Compound</option>
            <option value="chalet">Chalet</option>
            {/* Add other residential types */}
          </Form.Select>
        )}

        {/* City Search */}
        <Form.Group className="mb-3">
          <Form.Label>Search by City</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter city name" 
            value={city} 
            onChange={handleCityChange} 
          />
        </Form.Group>

        {/* Price Filters */}
        <Form.Group className="mb-3">
          <Form.Label>Min Price</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter min price" 
            value={minPrice} 
            onChange={handleMinPriceChange} 
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Max Price</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter max price" 
            value={maxPrice} 
            onChange={handleMaxPriceChange} 
          />
        </Form.Group>

        {/* Search Button */}
        <Button style={{ backgroundColor: '#31C48B', borderColor: '#31C48B' }} 
          className="text-white py-2 px-4 rounded w-100 mt-3"  onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
}

export default SelectBasicExample;
