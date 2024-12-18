
import { useContext } from "react"
import ProjectWrapper from "../context/projectWrapper"

const useProjectWrapper = () => useContext(ProjectWrapper)

export default useProjectWrapper