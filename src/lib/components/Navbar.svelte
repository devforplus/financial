<script>
  import {
    Navbar,
    NavBrand,
    NavHamburger,
    NavUl,
    NavLi,
  } from "flowbite-svelte";
</script>

<Navbar let:NavContainer color="primary">
  <NavContainer class="border px-5 py-2 rounded-lg bg-white dark:bg-gray-600">
    <NavBrand href="/">
      <img
        src="/financial_img.png"
        class="me-3 h-6 sm:h-9"
        alt="Financial Logo"
      />
      <span
        class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >가계부</span
      >
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/expense">Expense</NavLi>
    </NavUl>
  </NavContainer>
</Navbar>
