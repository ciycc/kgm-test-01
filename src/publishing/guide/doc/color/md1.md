<div class="md-section">

# Color

</div>

<script setup>
import CompColor from "&/components/CompColor.vue";
const colorItems = {
  primary: [
    {
      name:"--gray-100",
      color:"#333",
      fc:"#fff",
    },
    {
      name:"--gray-200",
      color:"#555",
      fc:"#fff",
    },
    {
      name:"--gray-300",
      color:"#666",
      fc:"#fff",
    },
    {
      name:"--gray-400",
      color:"#999",
      fc:"#111",
    },
    {
      name:"--gray-500",
      color:"#ccc",
      fc:"#111",
    },
  ],
  secondary: [],
  point:[],
  error:[],
}
</script>

<div class="color-guide-list">
  <div class="color-item">
    <div class="md-section">
      <h2>Primarry Colors</h2>
    </div>
    <CompColor :items="colorItems.primary" />
  </div>
  
  <div class="color-item">
    <div class="md-section">
      <h2>Secondary Colors</h2>
    </div>
  </div>
  
  <div class="color-item">
    <div class="md-section">
      <h2>Point Colors</h2>
    </div>
  </div>
  
  <div class="color-item">
    <div class="md-section">
      <h2>Error Colors</h2>
    </div>
  </div>
</div>