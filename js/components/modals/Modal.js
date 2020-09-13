import { h, render, Component } from '../../preact/preact.js'
import ModalCreate from './ModalCreate.js'
import ModalHistory from './ModalHistory.js'

export default class Modal extends Component {
    constructor(props) {
        super(props)
        state = {
            modalId: null,
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    open(modalId) {
        this.modalId = modalId
    }

    close(modalId) {
        this.modalId = null
    }

    render(props, state) {
        return h('div', { class: 'modal', style: this.modalId ? 'block' : 'none' },
            h(ModalCreate, { modalId: this.modalId }),
            h(ModalHistory, { onClose: this.closeModal }),
            h('div', { class: 'button' },
            h('button', { type: 'button', onClick: this.onSave }, 'Save'),
            h('button', { class: 'cancel', onClick: this.onCancel }, 'Cancel'),
        ),
        )
    }
}






// <div id="form-create" class="form" style="display: none">
//     <p>
//         <label for="task-project-name">Project name</label>
//         <input type="text" name="task-project-name" id="task-project-name" class="text"/>
//     </p>
//     <p>
//         <label for="task-name">Task name</label>
//         <input type="text" name="task-name" id="task-name" class="text"/>
//     </p>
//     <p class="buttons">
//         <input type="button" id="button-create" value="Save"/>
//         <input type="button" id="form-create.cancel-button" class="cancel" rel="form-create" value="Cancel"/>
//     </p>
//     <p style="display: none" id="create-status"></p>
// </div>