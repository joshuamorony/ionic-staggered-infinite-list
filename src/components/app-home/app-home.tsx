import { Component, State, Listen, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  @State() items: string[] = [];

  componentWillLoad() {
    this.items = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten"
    ];
  }

  @Listen("ionInfinite")
  loadData(event) {
    setTimeout(() => {
      console.log("Done");
      this.items.push(
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten"
      );
      this.items = [...this.items];
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.items.length > 100) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list lines="none">
          {this.items.map((item, index) => (
            <ion-item style={{ "--animation-order": index % 10 } as any}>
              <ion-label>{item}</ion-label>
            </ion-item>
          ))}
        </ion-list>

        <ion-infinite-scroll threshold="100px">
          <ion-infinite-scroll-content
            loading-spinner="bubbles"
            loading-text="Loading more data..."
          ></ion-infinite-scroll-content>
        </ion-infinite-scroll>
      </ion-content>
    ];
  }
}
