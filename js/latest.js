function latestTabClick(event) {
	event.preventDefault();

	let activeTabs = document.querySelectorAll('.active-latest');

	// deactivate existing active tab and panel
	activeTabs.forEach(function(tab) {
	  tab.className = tab.className.replace('active-latest', '');
	});

	// activate new tab and panel
	event.target.parentElement.className += ' active-latest';
	document.getElementById(event.target.href.split('#')[1]).className += ' active-latest';
  }

  const latestNavTab = document.getElementById( 'latest-nav-tab' );

  latestNavTab.addEventListener( 'click', latestTabClick, false );
