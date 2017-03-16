import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
	return (
		<Card>
			<CardSection>
			<View></View>
			<View style={}>
				<Text>{props.album.title}</Text>
				<Text>{props.album.artis}</Text>
			</View>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	}
}

export default AlbumDetail;
