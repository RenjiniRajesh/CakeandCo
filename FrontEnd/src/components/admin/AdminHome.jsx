import { useState, useEffect } from "react";
import styled from "styled-components";
import { CreateCake, ViewCakes } from "../../Api/api";// viewCakesApi-yum koodi import cheyyuka

// --- Styled Components (Ninte original login layout style) ---
const BGimg = styled.div`
    width: 100%; min-height: 100vh; display: flex; flex-direction: column;
    align-items: center; background-color: #fff0f6; font-family: 'Montserrat', sans-serif;
    padding: 2rem; box-sizing: border-box;
`;
const Container = styled.div`
    width: 100%; max-width: 500px; border: 2px solid #ffffff; border-radius: 12px;
    box-shadow: 0 0 12px rgba(0,0,0,0.1); padding: 2em;
    background-color: rgba(255, 255, 255, 0.8); backdrop-filter: blur(4px);
    margin-bottom: 2rem;
`;
const Form = styled.form` display: flex; flex-direction: column; gap: 1.5em; width: 100%; `;
const FormDiv = styled.div` display: flex; flex-direction: column; gap: 0.5em; color: #ae4d8e; `;
const Input = styled.input` padding: 0.5em; font-size: 1rem; border: none; border-bottom: 2px solid #d0acc5; background: transparent; color: #a04a83; &:focus { outline: none; border-bottom: 3px solid #890370; } `;
const SubmitBtn = styled.button` padding: 0.7em; background-color: #a04a83; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 1.1rem; &:hover { background-color: #df64b5; } `;

// Table Styles for Admin to view what is created
const ListContainer = styled.div` width: 100%; max-width: 800px; background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); `;
const Table = styled.table` width: 100%; border-collapse: collapse; `;
const Th = styled.th` background-color: #a04a83; color: white; padding: 10px; text-align: left; `;
const Td = styled.td` padding: 10px; border-bottom: 1px solid #e6d2e5; `;

const AdminHome = () => {
  const [form, setform] = useState({ cakeName: "", description: "", price: "" });
  const [cakesList, setCakesList] = useState([]); // Database-ile cakes thariatukan

  // 1. Database-il ulla cakes display cheyyanulla function
  const loadCakes = async () => {
    try {
      const res = await ViewCakes ();
      if (res.success) setCakesList(res.data);
    } catch (err) {
      console.log("Error loading listing:", err);
    }
  };

  useEffect(() => {
    loadCakes(); // Admin page load cheyiyumbo list load aakum
  }, []);

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  // 2. Form Submit cheythu cake add cheyyunna function
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await CreateCake(form);
      if (res.success) {
        alert("Cake Created Successfully by Admin! 🎂");
        setform({ cakeName: "", description: "", price: "" }); // Form fields clear aakkunnu
        loadCakes(); // PUTHIYA CAKE APPOZH THANNE TABLE-IL RENDER CHEYYAN
      } else {
        alert("Cake creation failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BGimg>
      {/* AADYAM: CAKE CREATE CHEYYANULLA OPTION (FORM) SHOW CHEYYUNNU */}
      <Container>
        <h2 style={{ color: '#9f7b95', textAlign: 'center', fontFamily: 'Montserrat', fontWeight: '700' }}>
          Admin Panel - Add New Cake
        </h2>
        <Form onSubmit={handlesubmit}>
          <FormDiv>
            <label>Cake Name:</label>
            <Input type="text" name="cakeName" placeholder="Enter cake name" value={form.cakeName} onChange={handlechange} required />
          </FormDiv>
          <FormDiv>
            <label>Description:</label>
            <Input type="text" name="description" placeholder="Enter description" value={form.description} onChange={handlechange} required />
          </FormDiv>
          <FormDiv>
            <label>Price ($):</label>
            <Input type="number" name="price" placeholder="Enter price" value={form.price} onChange={handlechange} required />
          </FormDiv>
          <SubmitBtn type="submit">Create Cake Option</SubmitBtn>
        </Form>
      </Container>

      {/* RANDAMATH: ALREADY POSTMAN VAZHIYUM EENNUM UNDAKKIYA CAKES LIIST */}
      <ListContainer>
        <h3 style={{ color: '#a04a83' }}>Live Cake Catalog (From Database)</h3>
        <Table>
          <thead>
            <tr>
              <Th>Cake Name</Th>
              <Th>Description</Th>
              <Th>Price</Th>
            </tr>
          </thead>
          <tbody>
            {cakesList.map((cake) => (
              <tr key={cake._id}>
                <Td style={{ fontWeight: 'bold' }}>{cake.cakeName}</Td>
                <Td>{cake.description}</Td>
                <Td>${cake.price}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ListContainer>
    </BGimg>
  );
};

export default AdminHome;