<template>
  <div>
    <div class="menu">
      <div v-for="item in items" :key="item.name">
        <img
          :src="item.image"
          :alt="item.name"
          draggable="true"
          @dragstart="dragStart($event, item)"
        />
      </div>
    </div>
    <div
      class="drop-zone"
      @dragover.prevent
      @drop="dropToCreateItem"
      ref="dropZone"
    >
      Drop Menu Item Here
      <div
        v-for="item in activeItems"
        :key="item.id"
        class="draggable-item"
        :style="{ top: `${item.top}px`, left: `${item.left}px` }"
      >
        <img
          :src="item.image"
          :alt="item.name"
          draggable="true"
          @dragstart="dragStart($event, item)"
          @dragend="checkOverlap($event, item)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      combinations: {
        //알파벳순 정렬
        "earth+water": "mud",
        "earth+fire": "lava",
        "fire+mud": "brick",
      },
      items: {
        water: { name: "water", image: "/assets/알케미/water.png" },
        earth: { name: "earth", image: "/assets/알케미/earth.png" },
        fire: { name: "fire", image: "/assets/알케미/fire.png" },
        mud: { name: "mud", image: "/assets/알케미/mud.png" },
        brick: { name: "brick", image: "/assets/알케미/brick.png" },
        lava: { name: "lava", image: "/assets/알케미/lava.png" },
      },
      activeItems: [],
      draggedItem: null,
      currentId: 1, // 기존 아이템 ID 다음부터 시작
    };
  },
  methods: {
    extractImageName(imagePath) {
      // 이미지 경로에서 파일 이름 (확장자 제외)를 추출합니다.
      return imagePath.split("/").pop().split(".")[0];
    },
    dragStart(event, item) {
      const itemName = this.extractImageName(item.image);
      this.draggedItem = {
        ...this.items[itemName],
        id: item.id || this.currentId++,
      };
      event.dataTransfer.setData("text/plain", "");
    },
    dropToCreateItem(event) {
      const rect = this.$refs.dropZone.getBoundingClientRect();

      const existingItem = this.activeItems.find(
        (i) => i.id === this.draggedItem.id
      );

      const topPosition = event.clientY - rect.top - 25;
      const leftPosition = event.clientX - rect.left - 25;

      if (existingItem) {
        existingItem.top = topPosition;
        existingItem.left = leftPosition;
      } else {
        let newItem = {
          ...this.draggedItem,
          top: topPosition,
          left: leftPosition,
        };
        this.activeItems.push(newItem);
      }

      this.checkOverlap(this.draggedItem);
      this.draggedItem = null;
    },

    checkOverlap(event, item1) {
      const item2 = this.activeItems.find(
        (i) => i !== item1 && this.areItemsOverlapping(item1, i)
      );

      if (item2) {
        const sortedNames = [item1.name, item2.name].sort().join("+");
        if (this.combinations[sortedNames]) {
          this.combineItems(item1, item2);
        }
      }
    },
    combineItems(item1, item2) {
      const sortedNames = [item1.name, item2.name].sort().join("+");
      const combinedItemName = this.combinations[sortedNames];

      if (combinedItemName) {
        // 새로운 아이템의 위치를 item1의 위치로 설정합니다.
        const newItem = {
          ...this.items[combinedItemName],
          top: item1.top,
          left: item1.left,
          id: this.currentId++, // ID도 할당합니다.
        };
        this.activeItems = this.activeItems.filter(
          (item) => item !== item1 && item !== item2
        );
        this.activeItems.push(newItem);
      } else {
        console.log("Combination not found for key:", sortedNames);
      }
    },
    areItemsOverlapping(item1, item2) {
      const ITEM_WIDTH = 100; // 아이템의 실제 너비로 변경
      const ITEM_HEIGHT = 100; // 아이템의 실제 높이로 변경

      return (
        item1.left < item2.left + ITEM_WIDTH &&
        item1.left + ITEM_WIDTH > item2.left &&
        item1.top < item2.top + ITEM_HEIGHT &&
        item1.top + ITEM_HEIGHT > item2.top
      );
    },
  },
};
</script>
<style scoped>
.menu {
  display: flex;
  gap: 10px;
}
.drop-zone {
  margin-top: 20px;
  width: 1000px;
  height: 1000px;
  border: 2px dashed #000;
  position: relative;
}
.draggable-item {
  position: absolute;
  border: 1px solid red;
}
</style>
