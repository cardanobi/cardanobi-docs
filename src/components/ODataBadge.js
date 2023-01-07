import React from 'react';
import styles from '@site/src/components/HomepageFeatures/styles.module.css';

export default function ODataBadge({ children }) {
    var badge_class = "theme-doc-version-badge badge badge-odata";

    return (
        <span class={badge_class}>
            OData
            {children}
        </span>
    );
}