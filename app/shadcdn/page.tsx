"use client";
import DrawerCustom from "@/components/shadcustom/DrawerCustom";
import DropdownCustom from "@/components/shadcustom/DropdownCustom";

type Props = {};

const SHAD = (props: Props) => {
    return (
        <div className="flex flex-col w-full justify-center items-center gap-2">
            <div className=" text-xl bg-slate-300 rounded-md p-1">Shad</div>
            <div className=" text-xl bg-slate-300 rounded-md p-1">Drop</div>
            <DropdownCustom />
            <div className=" text-xl bg-slate-300 rounded-md p-1">drawer</div>
            <DrawerCustom />
        </div>
    );
};

export default SHAD;
