export function JumpSlice() {
  return (
    <div className="jump-slice flex h-full min-h-0 flex-col border border-line bg-bg">
      <div className="flex h-8 shrink-0 items-center justify-between border-b border-line px-3">
        <p className="font-display text-xs font-medium tracking-wide text-muted">3D-уровень</p>
        <p className="text-xs tabular-nums text-muted">прыжок 01</p>
      </div>
      <div
        className="diorama min-h-0 flex-1"
        role="img"
        aria-label="3D-схема: блок поворачивается в мост, пока маркер ещё в прыжке"
      >
        <div className="stage">
          <div className="ground" />
          <div className="block block-low" />
          <div className="block block-high" />
          <div className="slab" />
          <div className="pawn" />
        </div>
      </div>
    </div>
  );
}
