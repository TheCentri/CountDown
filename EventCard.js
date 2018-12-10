import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import PropTypes from 'prop-types';
import { formatDate, getCountdownParts,} from './api';

const styles = StyleSheet.create({

});


export default function EventCard({ event }){
    return(
        <View style={styles.card}>
          <View style={style.cardHeader}>
            <Text style={styles.date}>{formatDate(event.date)}</Text>
            <Text style={style.title}>{event.title}</Text>
          </View>
        </View>
    )
}

EventCard.PropTypes = {
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date)
    }),
}