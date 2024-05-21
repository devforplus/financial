<script>
  import {
    Navbar,
    NavBrand,
    NavHamburger,
    NavUl,
    NavLi,
  } from "flowbite-svelte";

  import { goto } from "$app/navigation";
</script>

<Navbar let:NavContainer color="primary">
  <NavContainer class="px-5 py-2 bg-white border rounded-lg dark:bg-gray-600">
    <NavHamburger />
    <NavUl>
      <NavLi on:click={() => goto("/")}>Home</NavLi>
      <NavLi on:click={() => goto("/expense")}>Expense</NavLi>
    </NavUl>
  </NavContainer>
</Navbar>
