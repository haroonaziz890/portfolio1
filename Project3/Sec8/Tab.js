// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const images = Array.from({ length: 25 }, (_, index) => `https://via.placeholder.com/400?text=Image+${index + 1}`);

// function ContainerFluidBreakpointExample() {
//   return (
//     <Container 
//       fluid 
//       style={{ 
//         padding: "20px", 
//         backgroundColor: "#000", // Background Black 
//         display: "flex", 
//         justifyContent: "flex-end", // Move content to full right side
//         minHeight: "100vh", // Full height
//       }}
//     >
//       <div style={{ width: "90%", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
//         {Array.from({ length: 5 }).map((_, rowIndex) => (
//           <Row key={rowIndex} className="mb-4 justify-content-end" style={{ width: "100%" }}>
//             {Array.from({ length: 5 }).map((_, colIndex) => {
//               const imageIndex = rowIndex * 5 + colIndex;
//               return (
//                 <Col key={colIndex} xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-end">
//                   <img 
//                     src={images[imageIndex]} 
//                     alt={`Image ${imageIndex + 1}`} 
//                     style={{ 
//                       width: "100%", 
//                       minWidth: "250px", // Bigger Images
//                       maxWidth: "350px", // Increased max width
//                       height: "auto", // Maintain aspect ratio
//                       objectFit: "cover", 
//                       borderRadius: "10px",
//                       boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)" // Light shadow for effect
//                     }} 
//                   />
//                 </Col>
//               );
//             })}
//           </Row>
//         ))}
//       </div>
//     </Container>
//   );
// }

// export default ContainerFluidBreakpointExample;
