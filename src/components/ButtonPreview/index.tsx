import Link from 'next/link';

import commonStyles from '../../styles/common.module.scss';

export default function ButtonPreview(): JSX.Element {
  return (
    <aside>
      <Link href="/api/exit-preview">
        <a className={commonStyles.preview}>Sair do modo preview</a>
      </Link>
    </aside>
  );
}
