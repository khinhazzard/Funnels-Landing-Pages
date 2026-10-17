:root {
    --Navy: #1E2D5A;
    --Green: #78B41E;
    --Charcoal: #111;
    --DarkGray: #333;
}

html {
    scroll-behavior: smooth;
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[ Fonts ]~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*Hero Headline*/
#heading-4vzd8cwVH_ h1 {
    max-width: 700px;
    margin: 0 auto;
}

/*Sections Body Text*/

.sectionsBodyTextWidth {
    max-width: 900px;
    margin: 0 auto;
}

/* Cards */
.cardTitle h1 {
    font-size: 24px  !important;
    font-weight: 600  !important;
    line-height: 1.4  !important;
    color: var(--Charcoal) !important;
}

.subHeadline h1 {
    font-size: 17px !important;
    font-weight: 400 !important;
    line-height: 1.6 !important;
    color: var(--DarkGray) !important;
}

.bodyText p {
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.6 !important;
    color: var(--DarkGray) !important;
}

.bulletList {
    padding-left: 0px !important;
    padding-bottom: 0px !important;
    margin-bottom: 14px;
}

.bulletList p {
    font-size: 16px !important;
    line-height: 0.9 !important;
    color: var(--DarkGray) !important;
}

.bulletList li {
    margin-bottom: 1px;
}


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[ Cards ]~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

.toolCard {
    background-color: #FFFFFF !important;
    padding: 28px !important;
    border-left: 4px solid var(--Green) !important;
    border-radius: 8px !important;
    margin-top: 0px !important;
    margin-bottom: 40px !important;
}

.toolCard {
    /*box-shadow: 0 4px 8px rgba(0,0,0,0.28) !important;*/
    box-shadow: 0 6px 16px rgba(0,0,0,0.12) !important;
}

.cardSublabel {
    padding-bottom: 0px !important;
    margin-bottom: 0px !important;
}



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[ CTAs ]~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
 
.toolButton {
    background-color: var(--Green) !important;
    color: #FFFFFF !important;
    font-size: 15px !important;
    font-weight: 600 !important;
    padding: 12px 20px !important;
    border-radius: 6px !important;
    border: none !important;
    width: 100% !important;
    cursor: pointer;
    margin-top: 10px;
}

.toolButton {
    letter-spacing: 0.3px !important;
}

.toolButton:hover {
    background-color: #689f19 !important;
    color: #FFFFFF !important;
}

.joinButton {
    background-color: var(--Navy) !important;
    color: #FFFFFF !important;
    font-size: 15px !important;
    font-weight: 600 !important;
    padding: 12px 20px !important;
    border-radius: 6px !important;
    border: none !important;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.joinButton:hover {
	/*background-color: #162347 !important;*/
    color: #FFFFFF !important;
    background-color: #2A3F7A !important;
    filter: brightness(1.1);
}

/* Active (click) */
.joinButton:active {
    transform: scale(0.98);
    filter: brightness(0.95);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.bodyText, a:hover {
    color: var(--Green) !important;
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/