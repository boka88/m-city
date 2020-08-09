import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../../Hoc/AdminLayout'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import { firebasePlayers } from '../../../firebase'
import { firebaseLooper, reverseArray } from '../../ui/misc'

class AdminPlayers extends Component {

    state = {
        isloading: true,
        matches: []
    }

    componentDidMount(){
        firebasePlayers.once('value').then(())
    }

    render() {
        return (
            <div>
                players
            </div>
        )
    }
}

export default AdminPlayers