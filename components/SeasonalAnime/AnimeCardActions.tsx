import * as React from 'react';
import ActionSheetAndroid, { ActionSheetAndroidListProps } from '../../components/ActionSheetAndroid';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeColor } from '../../ThemeColor';

export interface AnimeCardActionsProps {
    closeModal: () => void;
}

export default class AnimeCardActions extends React.Component<AnimeCardActionsProps, any> {
    constructor(props: AnimeCardActionsProps) {
        super(props);
    }

    private listItemTemp: ActionSheetAndroidListProps[] = [
        {
            key: '0',
            title: 'Planning',
            icon: () => {
                return (
                    <Icon name="md-clock" size={25} color={ThemeColor.PrimaryColor} />
                )
            },
            onPress: () => { }
        },
        {
            key: '1',
            title: 'Completed',
            icon: () => {
                return (
                    <Icon name="md-checkmark" size={25} color={ThemeColor.PrimaryColor} />
                )
            },
            onPress: () => { }
        },
    ]

    public render() {
        return (
            <ActionSheetAndroid
                closeModal={this.props.closeModal}
                title=''
                listItem={this.listItemTemp} />
        );
    }
}