import React from 'react';

export default function DocsBadge({ children, type, style_class }) {
    var badge_class = "theme-doc-version-badge badge badge--success";

    if (style_class)
        badge_class = style_class;
    else
        if (type && type == "docs")
            badge_class = "theme-doc-version-badge badge badge--info";
    
    if (type)
        return (
            <span class={badge_class}>
                {type.toUpperCase()}
                {children}
            </span>
        );
    else
        return (
            <span class={badge_class}>
                {children}
            </span>
        );
}