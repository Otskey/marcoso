// src/heroservices.js
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('[role="tab"]');
    const panels = document.querySelectorAll('[role="tabpanel"]');

    // Hide all panels except the first one
    panels.forEach((panel, index) => {
      if (index !== 0) {
        panel.classList.add('hidden');
      }
    });

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Hide all panels
        panels.forEach(panel => panel.classList.add('hidden'));

        // Remove active state from all tabs
        tabs.forEach(tab => tab.classList.remove('border-red-900', 'text-red-900'));
        tabs.forEach(tab => tab.classList.add('border-transparent', 'text-gray-500', 'hover:border-gray-300', 'hover:text-gray-700'));

        // Add active state to the clicked tab
        tab.classList.add('border-red-900', 'text-red-900');
        tab.classList.remove('border-transparent', 'text-gray-500', 'hover:border-gray-300', 'hover:text-gray-700');

        // Show the corresponding panel
        const targetPanel = document.getElementById(tab.getAttribute('aria-controls'));
        targetPanel.classList.remove('hidden');
      });
    });
  });
})();

document.addEventListener('DOMContentLoaded', function () {
  const tabsContainer = document.querySelector('.scroll-snap');
  const tabs = document.querySelectorAll('[role="tab"]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const containerWidth = tabsContainer.offsetWidth;
      const tabRect = tab.getBoundingClientRect();
      const containerRect = tabsContainer.getBoundingClientRect();

      // Check if the tab is the last one
      if (tab === tabs[tabs.length - 1]) {
        // Adjust scroll to bring the last tab fully into view
        tabsContainer.scrollTo({
          left: tabsContainer.scrollWidth - containerWidth,
          behavior: 'smooth'
        });
      } else {
        // Default scroll behavior for other tabs
        tab.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    });
  });
});

