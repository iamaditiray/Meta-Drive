import { useState } from "react";
import "./Display.css";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";


const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg text-left">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12 text-left">
        {subtitle}
      </p>
    </div>
  </div>
);

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str);
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <img
              key={i}
              src={`https:${item.substring(6)}`}
              alt="Click to View File"
              className="image-list"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No Files to display");
    }
  };
  return (
    <>
    <div className='flex w-full justify-center items-left'>
    <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-20 px-4'>

    <div className='flex flex-col flex-1 items-center justify-center w-full mf:mt-0 mt-10'>
    <div className='p-10 sm:w-full w-full flex flex-col justify-start items-center blue-glassmorphism'>

{/* image display */}

      {/* <input
        type="text"
        placeholder="Enter Address"
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
      ></input>
      <button className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer hover:bg-[#2546bd]" onClick={getdata}>
        Get Data
      </button> */}
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input>
      <button className="text-white w-1/2 mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer hover:bg-[#2546bd]" onClick={getdata}>
        Get Data
      </button>
      </div> 
      <div className="image-list">{data}</div> 
      </div> 

      <div className='flex flex-1 justify-start flex-col mf:mr-10'>
    <div className="flex-1 flex flex-col justify-start items-start">
    <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient text-left">
    Empowering Secure <br/>Data Ownership
  </h1>
      </div>

      <div className="flex-1 flex flex-col justify-start items-start">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security and reliability"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Distribute data across a network of nodes that provides greater security and reliability."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Censorship resistance"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Decentralized storage systems are often designed to be resistant to censorship and data loss."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Flexibility and scalability"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Highly scalable and flexible, allows to meet the needs of a wide range of users and applications."
        />
      </div>
  
      </div>

      </div>
      </div>
    </>
  );
};
export default Display;