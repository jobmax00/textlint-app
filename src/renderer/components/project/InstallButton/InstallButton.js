// MIT © 2017 azu
"use strict";
import i18next from "i18next";
const React = require("react");
import {Button, ButtonType} from "office-ui-fabric-react";
export default class InstallButton extends React.Component {
    static propTypes = {
        disabled: React.PropTypes.bool,
        onClick: React.PropTypes.func.isRequired
    };

    render() {
        return <Button
            disabled={this.props.disabled}
            className="InstallButton"
            icon="Download"
            buttonType={ButtonType.primary}
            onClick={this.props.onClick}>
            {i18next.t("Install")}
        </Button>;
    }
}
