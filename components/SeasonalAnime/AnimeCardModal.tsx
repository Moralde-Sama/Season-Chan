import * as React from 'react';
import {View, Modal} from 'react-native';
import AnimeCardActions from './AnimeCardActions';
import AnimeCardMoreInfo from './AnimeCardMoreInfo';
import HeaderOptions from './HeaderOptions';

export interface AnimeModalOptions {
  showComponent: "Actions" | "MoreInfo" | "HeaderOptions" | "none";
  animationType: "fade" | "none" | "slide";
}

export interface SeasonalAnimeModalProps {
  data: any;
  modalVisible: boolean;
  closeModalHandler: () => void;
  animeModalOptions: AnimeModalOptions;

}

export default class SeasonalAnimeModal extends React.Component<SeasonalAnimeModalProps, any> {
  constructor(props: SeasonalAnimeModalProps) {
    super(props);
  }

  private renderComponentModal = () => {
    switch (this.props.animeModalOptions.showComponent) {
      case "Actions":
        return (
          <AnimeCardActions 
            closeModal={this.props.closeModalHandler}/>
        )
      case "MoreInfo":
        return (
          <AnimeCardMoreInfo 
            data={this.props.data}
            closeModal={this.props.closeModalHandler}/>
        )
      case "HeaderOptions":
        return (
          <HeaderOptions 
            closeModal={this.props.closeModalHandler}/>
        )
        default:
          return <View></View>
    }
  }

  public render() {
    return (
      <View>
        <Modal
          animationType={this.props.animeModalOptions.animationType}
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {}}>
          <this.renderComponentModal />
        </Modal>
      </View>
    );
  }
}