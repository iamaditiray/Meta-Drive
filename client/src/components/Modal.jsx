import { useEffect } from "react";
import "./Modal.css";

const Modal = ({ setModalOpen, contract }) => {
  const sharing = async () => {
    const address = document.querySelector("#address").value;
    await contract.allow(address);
    setModalOpen(false);
  };
  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#selectNumber");
      const options = addressList;

      for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let e1 = document.createElement("option");
        e1.textContent = opt;
        e1.value = opt;
        select.appendChild(e1);
      }
    };
    contract && accessList();
  }, [contract]);
  return (
    <>
      <div className="modalBackground">
        <div className="p-5 sm:w-1/3 w-1/3 flex flex-col justify-center items-center blue-glassmorphism">
          <div className="text-lg sm:text-lg text-white py-1 text-left mb-2">Share with</div>
          <div className="body">
            <input
              type="text"
              className="address" id="address"
              placeholder="Enter Address"
            ></input>
          </div>
          <form id="myForm">
            <select id="selectNumber" className="people-with-access">
              <option>People With Access</option>
            </select>
          </form>
          <div className="flex gap-5">
            <button className="text-white w-full mt-5 border-[1px] px-10 py-2 border-[#3d4f7c] rounded-full cursor-pointer hover:bg-[#FF0000]"
              onClick={() => {
                setModalOpen(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button className="text-white w-full mt-5 border-[1px] px-10 py-2 border-[#3d4f7c] rounded-full cursor-pointer hover:bg-[#2546bd]" onClick={() => sharing()}>
              Share</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
