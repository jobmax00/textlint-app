// MIT © 2017 azu
"use strict";
const path = require("path");
import Textlintrc from "./textlintrc/Textlintrc";
export default class Workspace {
    /**
     * @type {Textlintrc}
     */
    textlintrc;

    /**
     * @type {string}
     */
    directory;

    /**
     * @param {Textlintrc} textlintrc
     * @param {string} directory
     */
    constructor({textlintrc, directory}) {
        this.update({textlintrc, directory});
    }

    get isSetupTextlint() {
        return this.textlintrc.filePath !== undefined &&
            this.directory !== undefined &&
            this.modulesDirectory !== undefined;
    }

    /**
     * @param {string} filePath
     * @param {string} content
     */
    openNewTextlintrc({filePath, content}) {
        this.textlintrc = new Textlintrc({filePath, content});
    }

    /**
     * @param {Textlintrc} textlintrc
     * @param {string} directory
     */
    update({textlintrc, directory}) {
        this.textlintrc = textlintrc;
        this.directory = directory;
        this.modulesDirectory = path.join(directory, "node_modules");
    }

    /**
     * update current content
     * @param {string} content
     */
    updateCurrentContent(content) {
        this.textlintrc = this.textlintrc.updateContent(content);
    }

    /**
     * @param {Workspace} workspace
     * @returns {Boolean}
     */
    equals(workspace) {
        return workspace.textlintrc.equals(this.textlintrc);
    }
}
