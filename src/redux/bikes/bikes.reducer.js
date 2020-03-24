const INITIAL_STATE = {
  bikesData: {
    trail: {
      id: 1,
      title: "Trail",
      routeName: "shop/trail",
      items: {
        "stumpjumper-pro-29": {
          id: 1,
          name: "StumpJumper Pro 29",
          price: "6,300.00",
          partNumber: "No.94159-0001",
          imageUrl: "https://i.ibb.co/JzjY8S9/Stump-Jumper-Pro29-Prev-Card.png",
          prettyId: "stumpjumper-pro-29"
        },
        "stumpjumper-expert-29": {
          id: 2,
          name: "StumpJumper Expert 29",
          price: "5,000.00",
          partNumber: "No.94159-0002",
          imageUrl:
            "https://i.ibb.co/hZ637T8/Stump-Jumper-Expert29-Prev-Card.png",
          prettyId: "stumpjumper-expert-29"
        },
        "stumpjumper-pro-27-5": {
          id: 3,
          name: "StumpJumper Expert 27.5",
          price: "5,000.00",
          partNumber: "No.94159-0003",
          imageUrl:
            "https://i.ibb.co/RggDKkW/Stump-Jumper-Expert27-5-Prev-Card.png",
          prettyId: "stumpjumper-pro-27-5"
        },
        "fuse-expert-29": {
          id: 4,
          name: "Fuse Expert 29",
          price: "2,100.00",
          partNumber: "No.94159-0004",
          imageUrl: "https://i.ibb.co/P655gsP/Stump-Jumper29-Prev-Card.png",
          prettyId: "fuse-expert-29"
        },
        "fuse-expert-27-5": {
          id: 5,
          name: "Fuse Expert 27.5",
          price: "2,000.00",
          partNumber: "No.94159-0005",
          imageUrl: "https://i.ibb.co/zbMhXZr/Stump-Jumper27-5-Prev-Card.png",
          prettyId: "fuse-expert-27-5"
        }
      }
    },
    downhill: {
      id: 2,
      title: "DownHill",
      routeName: "shop/downhill",
      items: {
        "demo-racer-29": {
          id: 6,
          name: "Demo Racer 29",
          price: "6,500.00",
          partNumber: "No.94159-0006",
          imageUrl: "https://i.ibb.co/PjKcc04/Fuse-Expert29-Prev-Card.jpg",
          prettyId: "demo-racer-29"
        },
        "demo-expert-29": {
          id: 7,
          name: "Demo Expert 29",
          price: "6,300.00",
          partNumber: "No.94159-0007",
          imageUrl: "https://i.ibb.co/BgXTwtc/Fuse-Expert27-5-Prev-Card.jpg",
          prettyId: "demo-expert-29"
        },
        "demo-alloy-27-5": {
          id: 8,
          name: "Demo Alloy 27.5",
          price: "3,400.00",
          partNumber: "No.94159-0008",
          imageUrl: "https://i.ibb.co/D5th48h/Epic-Evo-Prev-Card.jpg",
          prettyId: "demo-alloy-27-5"
        }
      }
    },
    "s-works": {
      id: 3,
      title: "S-Works",
      routeName: "shop/s-works",
      items: {
        "s-works-demo-8": {
          id: 9,
          name: "S-Works Demo 8",
          price: "10,400.00",
          partNumber: "No.94159-0009",
          imageUrl: "https://i.ibb.co/g6Zdk2J/Demo-Racer29-Prev-Card.jpg",
          prettyId: "s-works-demo-8"
        },
        "s-works-epic-evo": {
          id: 10,
          name: "S-Works Epic EVO",
          price: "9,500.00",
          partNumber: "No.94159-0010",
          imageUrl: "https://i.ibb.co/BwD298b/Demo-Expert29-Prevcard.jpg",
          prettyId: "s-works-epic-evo"
        },
        "s-works-stumpjumper-29": {
          id: 11,
          name: "S-Works StumpJumper 29",
          price: "9,520.00",
          partNumber: "No.94159-0011",
          imageUrl: "https://i.ibb.co/M8f4Wjx/Demo-Alloy27-5-Prev-Card.jpg",
          prettyId: "s-works-stumpjumper-29"
        },
        "s-works-stumpjumper-27-5": {
          id: 12,
          name: "S-Works StumpJumper 27.5",
          price: "9,520.00",
          partNumber: "No.94159-0012",
          imageUrl: "https://i.ibb.co/fXFvsRt/Demo8-Prev-Card.png",
          prettyId: "s-works-stumpjumper-27-5"
        },
        "s-works-demo-8-frame": {
          id: 13,
          name: "S-Works Demo 8 Frame",
          price: "4,000.00",
          partNumber: "No.94159-0013",
          imageUrl: "https://i.ibb.co/HhnttmZ/Demo8-Frame-Prev-Card.png",
          prettyId: "s-works-demo-8-frame"
        }
      }
    }
  }
};

const bikesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default bikesReducer;
