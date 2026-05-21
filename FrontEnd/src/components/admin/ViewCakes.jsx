import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ViewCakes } from "../../Api/api";//  Correct Path// Nammude fetch function

// --- Styled Components (Cake shop-nu patitya nalla clean design) ---

const PageContainer = styled.div`
  padding: 3rem 2rem;
  min-height: 100vh;
  background-color: #fff5fa; /* Soft pinkish background */
  font-family: 'Montserrat', sans-serif;
`;

const MainHeading = styled.h2`
  text-align: center;
  color: #a04a83;
  font-size: 2.8rem;
  margin-bottom: 2rem;
  font-family: 'Playfair Display', serif;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CakeCard = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(160, 74, 131, 0.1);
  padding: 1.5rem;
  text-align: center;
  border: 1px solid #e6d2e5;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(160, 74, 131, 0.2);
  }
`;

const CakeTitle = styled.h3`
  color: #890370;
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const CakeDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.4;
  height: 40px; /* Limits description height to keep cards uniform */
  overflow: hidden;
`;

const PriceTag = styled.div`
  font-weight: 700;
  color: #a04a83;
  font-size: 1.4rem;
  margin: 1rem 0;
`;

const OrderButton = styled.button`
  background-color: #a04a83;
  color: white;
  border: none;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  width: 100%;
  transition: background 0.3s ease;

  &:hover {
    background-color: #890370;
  }
`;

// --- Component Main Logic ---

const ViewCake = () => {
  const [cakes, setCakes] = useState([]); // Backend data save cheyyan ulla state
  const [loading, setLoading] = useState(true); // Loading handling

  useEffect(() => {
    const getCakesMenu = async () => {
      try {
       const res = await ViewCake();// Fetch call trigger cheyyunnu
        if (res.success) {
          setCakes(res.data); // Backend controller-ile 'data' state-leykk kayatunnu
        } else {
          alert("Failed to load cakes from database");
        }
      } catch (err) {
        console.error("Frontend display error:", err);
      } finally {
        setLoading(false);
      }
    };

    getCakesMenu();
  }, []);

  if (loading) {
    return <MainHeading style={{ marginTop: "20vh" }}>Loading Delicious Cakes... 🎂</MainHeading>;
  }

  return (
    <PageContainer>
      <MainHeading>Our Special Cake Menu</MainHeading>
      
      {cakes.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>No cakes available right now. Admin creation baki aanu!</p>
      ) : (
        <MenuGrid>
          {/* MAP FUNCTION: ORO CAKE-INUM DHAA ITHU POLE CARDS UNDAKKUM */}
          {cakes.map((cake) => (
            <CakeCard key={cake._id}>
              <CakeTitle>{cake.cakeName}</CakeTitle>
              <CakeDescription>{cake.description}</CakeDescription>
              <PriceTag>${cake.price}</PriceTag>
              <OrderButton>Add To Cart</OrderButton>
            </CakeCard>
          ))}
        </MenuGrid>
      )}
    </PageContainer>
  );
};

export default ViewCake;