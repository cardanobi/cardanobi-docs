import React from 'react';

export default function EndpointBadge({ children, type, style_class }) {
    var badge_class = "theme-doc-version-badge badge badge--success";

    if (style_class)
        badge_class = style_class;
    else
        if (type && type == "post")
            badge_class = "theme-doc-version-badge badge badge--warning";
    
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