'use strict';

/******************************************************************************/

let faIconsInit = function(root) {
    const icons = (root || document).querySelectorAll('.fa-icon');
    for ( const icon of icons ) {
        if ( icon.firstChild === null || icon.firstChild.nodeType !== 3 ) {
            continue;
        }
        const name = icon.firstChild.nodeValue;
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.classList.add('fa-icon_' + name);
        const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        const href = '/img/fontawesome/fontawesome-defs.svg#' + name;
        use.setAttribute('href', href);
        use.setAttribute('xlink:href', href);
        svg.appendChild(use);
        icon.replaceChild(svg, icon.firstChild);
        if ( icon.classList.contains('fa-icon-badged') ) {
            const badge = document.createElement('span');
            badge.className = 'fa-icon-badge';
            icon.insertBefore(badge, icon.firstChild.nextSibling);
        }
    }
};

faIconsInit();