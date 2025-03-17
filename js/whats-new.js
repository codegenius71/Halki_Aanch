function whatsNavClick(event) {
	event.preventDefault();

	let activeTabs = document.querySelectorAll('.active-whats');

	// deactivate existing active tab and panel
	activeTabs.forEach(function(tab) {
		tab.className = tab.className.replace('active-whats', '');
	});

	// activate new tab and panel
	event.target.parentElement.className += ' active-whats';
	document.getElementById(event.target.href.split('#')[1]).className += ' active-whats';
}
const elementWhats = document.getElementById( 'whats-nav-tab' );
elementWhats.addEventListener( 'click', whatsNavClick, false );
