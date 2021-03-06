'use strict';
{
	const BaseAction = require('./action/BaseAction');
	const Action = require('./action/Action');
	const Editor = require('./action/Editor');
	const CheckEditor = require('./action/CheckEditor');
	const ButtonAction = require('./action/ButtonAction');

	class ImmutableCheckEditor extends CheckEditor {
		get disabled() {
			return this._disabled;
		}
		get readOnly() {
			return this._readOnly;
		}
	}

	/**
	 * column actions
	 * @type {Object}
	 * @namespace cheetahGrid.columns.action
	 * @memberof cheetahGrid.columns
	 */
	const action = {
		ACTIONS: {
			CHECK: new ImmutableCheckEditor(),
		},
		get BaseAction() {
			return BaseAction;
		},
		get Editor() {
			return Editor;
		},
		get Action() {
			return Action;
		},
		get CheckEditor() {
			return CheckEditor;
		},
		get ButtonAction() {
			return ButtonAction;
		},
		of(columnAction) {
			if (!columnAction) {
				return action.ACTIONS.DEFAULT;
			} else if (typeof columnAction === 'string') {
				return action.ACTIONS[columnAction.toUpperCase()] || action.of(null);
			} else {
				return columnAction;
			}
		},
	};
	module.exports = action;
}