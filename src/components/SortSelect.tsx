import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { BiChevronDown } from "react-icons/bi";

const SortSelect = () => {
    return (
        <div>
            <span className="text-sm mr-1">Sort by</span>
            <Menu>
                <MenuButton className="inline-flex items-center gap-2 bg-white border py-1 px-3 text-sm text-black">
                    Options
                    <BiChevronDown />
                </MenuButton>

                <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-52 mt-1 origin-top-right border border-white/5 bg-white p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-30"
                >
                    <MenuItem>
                        <button className="flex w-full items-center gap-2 py-1.5 px-3 data-[focus]:bg-gray-50 uppercase">
                            electronics
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button className="flex w-full items-center gap-2 py-1.5 px-3 data-[focus]:bg-gray-50 uppercase">
                            Jewelery
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button className="flex w-full items-center gap-2 py-1.5 px-3 data-[focus]:bg-gray-50 uppercase">
                            mens clothes
                        </button>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div>
    )
}

export default SortSelect