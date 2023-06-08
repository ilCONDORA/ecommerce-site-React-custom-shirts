import React from "react";
import "../../pages/Admin/admin.css";
import AdminWarehouseRow from "./AdminWarehouseRow";
import AdminWarehouseRows from "./AdminWarehouseRows";
import AdminWarehouseRowsC from "./AdminWarehouseRowsC";
// import { useLiveItems } from "../../App";
import { useState } from "react";



const teeImgsMen = [];
const teeImgsWomen = [];
const teeImgsKids = [];

function importAllMen(r) {

  r.keys().forEach(key => teeImgsMen.push(r(key)));
}
function importAllWomen(r) {
  r.keys().forEach(key => teeImgsWomen.push(r(key)));
}
function importAllKids(r) {
  r.keys().forEach(key => teeImgsKids.push(r(key)));
}
importAllKids(require.context("../../assets/img/products-img/kid", false, /\.(png|jpe?g|svg)$/));
importAllMen(require.context("../../assets/img/products-img/men", false, /\.(png|jpe?g|svg)$/));
importAllWomen(require.context("../../assets/img/products-img/women", false, /\.(png|jpe?g|svg)$/));

const AdminWarehouse = ()=>{
  const [selectedModello, setSelectedModello] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const handleModelloChange = event => {
    setSelectedModello(event.target.value);
  };
  const handleColorChange = event => {
    setSelectedColor(event.target.value);
  };
  const handleSizeChange = event => {
    setSelectedSize(event.target.value);
  };
  

  

  const filteredTeeImgs =
    selectedModello === "men"
      ? [teeImgsMen]
      : selectedModello === "woman"
      ? [[] ,teeImgsWomen]
      : selectedModello === "kids"
      ? [[],[], teeImgsKids]
      : [teeImgsMen,teeImgsWomen,teeImgsKids];


  let newProducts = JSON.parse(localStorage.getItem("newProducts") ) || [];
  return(
    <>
      {/* <span className={show ? "toolTipImgActive" :"toolTipImg"}> <img src={miniImg} alt="no" /> </span> */}
        <div className="warehouse">
          <table>
          <thead className="wTableHead">
          <tr>
            <th>Nome </th>
            <th> 
              <select name="Modello" id="Modello" onChange={handleModelloChange}>
                <option value="">Modello..</option>
                <option value="men">Uomo</option>
                <option value="woman">Donna</option>
                <option value="kids">Bambino</option>
              </select>
            </th>
            <th>
              <select name="Colore" id="Colore" onChange={handleColorChange}>
                <option value="">Colore..</option>
                <option value="white">Bianco</option>
                <option value="black">Nero</option>
                <option value="gray">Grigio</option>
                <option value="blue">Blu</option>
                <option value="red">Rosso</option>
              </select>
            </th>
            <th>
              <select name="Taglia" id="Taglia" onChange={handleSizeChange}>
                <option value="">Taglia..</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </th>
            <th>Quantità</th>
          </tr>
          </thead>
          <tbody>
            <>
            {filteredTeeImgs.map((array,modelIdx)=>{
              let model 
              modelIdx === 0 ? model= "men": 
              modelIdx === 1 ? model ="woman":
              modelIdx === 2 ? model ="kids": model= ""
              return(

                array.filter(color=>color.includes(selectedColor)).map((teeimg, index) => {
              
                  const imagePath = teeimg;
                  const productName = imagePath.split('/').pop().split('-')[0];
                  const productColor = imagePath.split('/').pop().split('.').shift().split('-').pop(); 
                  return(
                    <> 
                    <React.Fragment key={index}/>
                    {
                      selectedSize === "XS" ? < AdminWarehouseRow name={productName}  img={<img src={teeimg} alt={index} />} modello={model} color={productColor} size={"XS"} quantity={"∞"} />
                      :selectedSize=== "S" ? <AdminWarehouseRow name={productName} img={<img src={teeimg} alt={index} />} modello={model} color={productColor} size={"S"} quantity={"∞"} />
                      :selectedSize=== "M" ? <AdminWarehouseRow name={productName} img={<img src={teeimg} alt={index} />} modello={model} color={productColor} size={"M"} quantity={"∞"} />
                      :selectedSize=== "L" ? <AdminWarehouseRow name={productName} img={<img src={teeimg} alt={index} />} modello={model} color={productColor} size={"L"} quantity={"∞"} />
                      :selectedSize=== "XL" ? <AdminWarehouseRow name={productName} img={<img src={teeimg} alt={index} />} modello={model} color={productColor} size={"XL"} quantity={"∞"} />
                      :<>
                          <AdminWarehouseRow name={productName} img={<img src={teeimg} alt={index} />} modello={model} color={productColor} size={"XS"} quantity={"∞"} />
                          <AdminWarehouseRow name={productName} img={<img src={teeimg} alt={index} />} modello={model} color={productColor} size={"S"} quantity={"∞"} />
                          <AdminWarehouseRow name={productName} img={<img src={teeimg} alt={index} />} modello={model} color={productColor} size={"M"} quantity={"∞"} />
                          <AdminWarehouseRow name={productName} img={<img src={teeimg} alt={index} />} modello={model} color={productColor} size={"L"} quantity={"∞"} />
                          <AdminWarehouseRow name={productName} img={<img src={teeimg} alt={index} />} modello={model} color={productColor} size={"XL"} quantity={"∞"} />
                        </>
                    }
                    </>
                  )
                })
              )
            })}
            {newProducts.filter(newp=>newp.category.includes(selectedModello)).map((newp,npidx)=>{
              return(
                <>
                <React.Fragment key={npidx}/>
                { selectedColor === "black" && selectedSize === "XS"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"black"} size={"XS"} quantity={"∞"}/>
                  :selectedColor === "black" && selectedSize === "S"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"black"} size={"S"} quantity={"∞"}/>
                  :selectedColor === "black" && selectedSize === "M"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"black"} size={"M"} quantity={"∞"}/>
                  :selectedColor === "black" && selectedSize === "L"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"black"} size={"L"} quantity={"∞"}/>
                  :selectedColor === "black" && selectedSize === "XL"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"black"} size={"XL"} quantity={"∞"}/>
                  :selectedColor === "white" && selectedSize === "XS"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"white"} size={"XS"} quantity={"∞"}/>
                  :selectedColor === "white" && selectedSize === "S"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"white"} size={"S"} quantity={"∞"}/>
                  :selectedColor === "white" && selectedSize === "M"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"white"} size={"M"} quantity={"∞"}/>
                  :selectedColor === "white" && selectedSize === "L"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"white"} size={"L"} quantity={"∞"}/>
                  :selectedColor === "white" && selectedSize === "XL"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"white"} size={"XL"} quantity={"∞"}/>
                  :selectedColor === "gray" && selectedSize === "XS"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"gray"} size={"XS"} quantity={"∞"}/>
                  :selectedColor === "gray" && selectedSize === "S"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"gray"} size={"S"} quantity={"∞"}/>
                  :selectedColor === "gray" && selectedSize === "M"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"gray"} size={"M"} quantity={"∞"}/>
                  :selectedColor === "gray" && selectedSize === "L"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"gray"} size={"L"} quantity={"∞"}/>
                  :selectedColor === "gray" && selectedSize === "XL"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"gray"} size={"XL"} quantity={"∞"}/>
                  :selectedColor === "blue" && selectedSize === "XS"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"blue"} size={"XS"} quantity={"∞"}/>
                  :selectedColor === "blue" && selectedSize === "S"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"blue"} size={"S"} quantity={"∞"}/>
                  :selectedColor === "blue" && selectedSize === "M"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"blue"} size={"M"} quantity={"∞"}/>
                  :selectedColor === "blue" && selectedSize === "L"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"blue"} size={"L"} quantity={"∞"}/>
                  :selectedColor === "blue" && selectedSize === "XL"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"blue"} size={"XL"} quantity={"∞"}/>
                  :selectedColor === "red" && selectedSize === "XS"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"red"} size={"XS"} quantity={"∞"}/>
                  :selectedColor === "red" && selectedSize === "S"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"red"} size={"S"} quantity={"∞"}/>
                  :selectedColor === "red" && selectedSize === "M"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"red"} size={"M"} quantity={"∞"}/>
                  :selectedColor === "red" && selectedSize === "L"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"red"} size={"L"} quantity={"∞"}/>
                  :selectedColor === "red" && selectedSize === "XL"? <AdminWarehouseRow name={newp.name} img={<img src={newp.productImage} alt={npidx} />} modello={newp.category} color={"red"} size={"XL"} quantity={"∞"}/>
                  :selectedColor === "black" ? <AdminWarehouseRowsC name={newp.name} img={<img src={newp.productImage} alt={npidx}/>} modello={newp.category}  color={"black"}  quantity={"∞"}/>
                  :selectedColor === "white"?<AdminWarehouseRowsC name={newp.name} img={<img src={newp.productImage} alt={npidx}/>} modello={newp.category}  color={"white"}  quantity={"∞"}/>
                  :selectedColor === "gray"?<AdminWarehouseRowsC name={newp.name} img={<img src={newp.productImage} alt={npidx}/>} modello={newp.category}  color={"gray"}  quantity={"∞"} />
                  :selectedColor === "blue"?<AdminWarehouseRowsC name={newp.name} img={<img src={newp.productImage} alt={npidx}/>} modello={newp.category}  color={"blue"}  quantity={"∞"} />
                  :selectedColor === "red"?<AdminWarehouseRowsC name={newp.name} img={<img src={newp.productImage} alt={npidx}/>} modello={newp.category}  color={"red"}  quantity={"∞"} />
                  :selectedSize === "XS" ? <AdminWarehouseRows name={newp.name} img={<img src={newp.productImage} alt={npidx}/>} modello={newp.category}  size={"XS"}  quantity={"∞"} />
                  :selectedSize=== "S" ? <AdminWarehouseRows name={newp.name} img={<img src={newp.productImage} alt={npidx}/>} modello={newp.category}  size={"S"} quantity={"∞"} />
                  :selectedSize=== "M" ? <AdminWarehouseRows name={newp.name} img={<img src={newp.productImage} alt={npidx}/>} modello={newp.category}  size={"M"} quantity={"∞"} />
                  :selectedSize=== "L" ? <AdminWarehouseRows name={newp.name} img={<img src={newp.productImage} alt={npidx}/>} modello={newp.category}  size={"L"} quantity={"∞"} />
                  :selectedSize=== "XL" ? <AdminWarehouseRows name={newp.name} img={<img src={newp.productImage} alt={npidx}/>} modello={newp.category}  size={"XL"} quantity={"∞"} />
                  :<>
                    <AdminWarehouseRows name={newp.name} img={<img src={newp.productImage} alt={npidx}/>} modello={newp.category}  size={"XS"}  quantity={"∞"} />
                    <AdminWarehouseRows name={newp.name} img={<img src={newp.productImage} alt={npidx}/>} modello={newp.category}  size={"S"} quantity={"∞"} />
                    <AdminWarehouseRows name={newp.name} img={<img src={newp.productImage} alt={npidx}/>} modello={newp.category}  size={"M"} quantity={"∞"} />
                    <AdminWarehouseRows name={newp.name} img={<img src={newp.productImage} alt={npidx}/>} modello={newp.category}  size={"L"} quantity={"∞"} />
                    <AdminWarehouseRows name={newp.name} img={<img src={newp.productImage} alt={npidx}/>} modello={newp.category}  size={"XL"} quantity={"∞"} />
                     </>
                }
                </>
              )
            })}
            </>
          </tbody>
          </table>
        </div>
    </>
    );
};

export default AdminWarehouse