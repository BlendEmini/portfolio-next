import React from "react";

const Navbar = () => {
    return (
        <div className="flex justify-center items-center md:gap-96 box-border py-6 ">
            <h3 className="font-pacifico w-80 md:w-auto text-white text-2xl md:text-5xl box-border p-2">
                Blend Emini - Portfolio
            </h3>
            <div className="flex btn items-center mr-2 text-black bg-teal-400  rounded-md gap-1 h-12 box-border px-2 md:px-4 p-1 ">
                <a href="https://drive.google.com/file/d/11xxHM7_0f_KcOpP4ZI5_6J7e6H02TPaM/view?usp=drive_link">
                    View Resume{" "}
                </a>
                <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                >
                    <path
                        d="M48 13a4 4 0 0 0-4-4H33V7a4 4 0 0 0-4-4H19a4 4 0 0 0-4 4v2H4a4 4 0 0 0-4 4c0 4.57-.49 7.57 2 10.64V41a4 4 0 0 0 4 4h36a4 4 0 0 0 4-4V23.64c2.43-3 2-5.54 2-10.64zM17 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H17zm25 36H6a2 2 0 0 1-2-2V25.48C6.88 27.41 8.36 27 20 27v1a1 1 0 0 0 0 2c0 2-.13 2.45.45 2.83C23.7 35 23.59 35 24 35s.27 0 3.55-2.17c.57-.37.45-.73.45-2.83a1 1 0 0 0 0-2v-1c11.21 0 13 .49 16-1.52V41a2 2 0 0 1-2 2zM20 22v-2h8v2zm6 2v4h-4v-4zm-4 6h4v1.46l-2 1.34-2-1.34zm24-12a7 7 0 0 1-7 7H28v-1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v1H9a7 7 0 0 1-7-7v-5a2 2 0 0 1 2-2h40a2 2 0 0 1 2 2z"
                        data-name="Brief Case"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Navbar;
