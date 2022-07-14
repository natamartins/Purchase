import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Checkbox, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import CustomCard from "../CustomCard";
import Header from "../Header";
import Form from "./Form";
import { bindActionCreators } from "redux";
import { Creators as ListAction } from "../../store/actions/list";

class CreateList extends Component {
  addProduct = (product, list) => {
    this.props.addProduct(product, list);
  };

  render() {
    return (
      <div>
        <Header />
        <Form addProduct={this.addProduct} />
        <div>
          <CustomCard>
            <div>
              <div>
                <Typography variant="subtitle" component="h2">
                  Café
                </Typography>
                <Checkbox />
              </div>
              <Typography>1 unidade </Typography>
              <Typography>R$ 200. 00</Typography>
              <div>
                <div>
                  <FontAwesomeIcon icon={faPen} color="#00b0ff" />
                  <FontAwesomeIcon icon={faTrash} color="#e91e63" />
                </div>
                <p>total: R$ 90</p>
              </div>
            </div>
          </CustomCard>
        </div>
      </div>
    );
  }
}

const mapStateTpProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ListAction, dispatch);

export default connect(mapStateTpProps, mapDispatchToProps)(CreateList);
