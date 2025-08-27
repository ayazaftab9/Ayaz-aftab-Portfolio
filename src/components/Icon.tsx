import React from 'react';

const Icon = ({ name, size = 24 }: { name: string; size?: number }) => (
    <i data-feather={name} width={size} height={size}></i>
);

export default Icon;
