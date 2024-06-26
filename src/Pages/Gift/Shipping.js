import React, { useState } from "react";
import { PiMagnifyingGlass } from "react-icons/pi";
import Footer from "./Footer";
import Header from "./Header";
import SaveHistory from "../../components/SaveHistory";
import GiftDetailsComponent from "../../components/GiftDetailsComponent";
import FilterModal from "./Modals/FilterModal";
import CouponModal from "./Modals/CouponModal";
import CheckoutModal from "./Modals/CheckoutModal";

export default function Shipping() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
    const [currentOption, setCurrentOption] = useState(0);

    const [isToggled, setIsToggled] = useState(true);

    const toggleMenu = (e) => {
        setCurrentOption(e);
        setIsToggled(!isToggled);
    };

    return (
        <>
            <Header title="MY GIFT" />

            <div className="px-3 mt-20">
                {/* This div is for input search-bar */}
                <div className="flex justify-between mt-4 mb-3 rounded-xl">
                    <div className="rounded-[14px] flex  gap-x-2 items-center px-3 py-2 w-full bg-[#f5f6f8]">
                        <PiMagnifyingGlass
                            size={30}
                            className="text-gray-300 text-start"
                        />
                        <input
                            placeholder="주문내역 검색"
                            className="bg-transparent text-[14px] border-none flex-grow outline-none"
                        />
                    </div>

                    <button onClick={() => setIsOpen(true)} className=" ml-2 w-[60px] flex items-center justify-center h-[50px] bg-[#fed52a] rounded-xl">
                        <img src="/setting.svg" alt=""
                            className="h-5"
                        />
                    </button>
                </div>

                <div className="flex gap-2 text-[11px] font-[400]">
                    <span>현재 설정된 필터:</span>
                    <span className="text-[#208AC5]">전체 / 1주일 / 전체</span>
                </div>

                {/* Toggle Buttons */}
                <div
                    className={`w-full bg-[#f2f2f9] p-1 rounded-full flex mt-8 ${
                        isToggled ? "menu-open" : ""
                    }`}
                >
                    <div
                        onClick={() => toggleMenu(0)}
                        className={`w-1/2 rounded-full  py-3 ${
                            isToggled
                                ? "bg-[#fff] text-[#000]"
                                : "text-[#67697A]"
                        }`}
                    >
                        <p className="text-[14px] font-[400] text-center">저장 내역</p>
                    </div>
                    <div
                        onClick={() => toggleMenu(1)}
                        className={`w-1/2 rounded-full py-3 ${
                            isToggled
                                ? "  text-[#67697A]"
                                : "bg-[#fff] text-[#000]"
                        }`}
                    >
                        <p className="text-[14px] font-[400] text-center ">선물 내역</p>
                    </div>
                </div>

                {currentOption === 0 ? (
                    <SaveHistory setIsOpen={setIsCouponModalOpen} />
                ) : (
                    <GiftDetailsComponent setIsOpen={setIsCheckoutModalOpen} />
                )}
            </div>

            {isOpen && <FilterModal isOpen={isOpen} setIsOpen={setIsOpen} />}
            {isCouponModalOpen && (
                <CouponModal
                    isOpen={isCouponModalOpen}
                    setIsOpen={setIsCouponModalOpen}
                />
            )}
            {isCheckoutModalOpen && (
                <CheckoutModal
                    isOpen={isCheckoutModalOpen}
                    setIsOpen={setIsCheckoutModalOpen}
                />
            )}

            <Footer address={"mygift"} />
        </>
    );
}
