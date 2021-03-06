import { h, render, Component } from '../preact/preact.js'
//import Modals from '../components/modals/Modal.js'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.onButton = this.onButton.bind(this);
    }

    onButton(e) {
        this.props.onButton(e.target.value);
    }

    render(props, state) {
        return h('div', { class: 'header' },
            h('button', { class: 'create button', value: 'create', onClick: this.onButton }),
            h('button', { class: 'history button', value: 'history', onClick: this.onButton }, 'History'),
            h('button', { class: 'export-all button', value: 'export-all', onClick: this.onButton }, 'Export All'),
            h('div', { class: 'today' },
                'Today',
                h('div', { class: 'today-text' })
            ),
            h('button', { class: 'reset-all button', value: 'reset-all', onClick: this.onButton }, 'Reset All'),
            h('button', { class: 'delete-all button', value: 'delete-all', onClick: this.onButton }, 'Delete All')
        )
    }
}