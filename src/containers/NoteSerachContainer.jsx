import { connect } from "react-redux";
import Navbar from "../component/Navbar";
import { serachNote } from "../action";

const mapDispatchToProps = {
    onSearchNotes : serachNote,
}

export default connect(null, mapDispatchToProps)(Navbar)