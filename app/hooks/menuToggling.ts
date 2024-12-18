import MenuToggling from "@/app/context/menuWrapper"
import { useContext } from "react"

const useMenuToggling = () => useContext(MenuToggling)

export default useMenuToggling