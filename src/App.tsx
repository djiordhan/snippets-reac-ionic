import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonTabBar,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonButton,
  IonButtons,
  IonMenuToggle,
  IonFooter,
  IonChip,
  IonAvatar,
  IonLabel,
  IonList,
  IonItem
} from "@ionic/react";

class App extends Component {
  render() {
    return (
      <IonApp>
        <IonSplitPane contentId="menu-content">
          <IonMenu
            side="start"
            menuId="first"
            type="push"
            contentId="menu-content"
          >
            <IonHeader mode="ios">
              <IonToolbar>
                <IonSearchbar mode="ios" animated />
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonItem>
                  <IonLabel>Pokémon Yellow</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Mega Man X</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>The Legend of Zelda</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Pac-Man</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Super Mario World</IonLabel>
                </IonItem>
              </IonList>
            </IonContent>
            <IonFooter>
              <IonToolbar color="warning">
                <IonChip>
                  <IonAvatar>
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                  </IonAvatar>
                  <IonLabel>Chip Avatar</IonLabel>
                </IonChip>
                <IonButton color="warning" mode="ios" slot="end" size="small">
                  <IonIcon name="cog" />
                </IonButton>
              </IonToolbar>
            </IonFooter>
          </IonMenu>

          <IonContent class="ion-page" main id="menu-content">
            <IonHeader mode="ios">
              <IonToolbar>
                <IonTitle>Snippets</IonTitle>
                <IonButtons slot="start">
                  <IonMenuToggle autoHide>
                    <IonButton mode="ios">
                      <IonIcon slot="icon-only" name="menu" />
                    </IonButton>
                  </IonMenuToggle>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent padding>
              <h3>Title</h3>
            </IonContent>
          </IonContent>
        </IonSplitPane>
      </IonApp>
    );
  }
}

export default App;
