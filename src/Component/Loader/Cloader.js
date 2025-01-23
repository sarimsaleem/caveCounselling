import './loader.css'
import { Spin } from "antd";
function Cloader() {
    return (
        <div>
            <div className="loading-spinner">
                    <Spin size="large" />
            </div>
        </div>
    )
}

export default Cloader